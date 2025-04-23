import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const Button = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["hello-world"],
    queryFn: () =>
      new Promise((resolve) =>
        setTimeout(() => resolve(Math.random() * 100), 1000)
      ),
  });

  console.log("{ isPending, error, data }", { isPending, error, data });
  return <button>I am a button - {data}</button>;
};
const ToggleButtonReactQuery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleToggleBtn = () => setIsVisible((prev) => !prev);
  return (
    <div>
      ToggleButtonReactQuery
      {isVisible && <Button />}
      <button onClick={handleToggleBtn}>Toggle button</button>
    </div>
  );
};

export default ToggleButtonReactQuery;
