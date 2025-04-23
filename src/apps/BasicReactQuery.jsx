import { useQuery } from "@tanstack/react-query";
import React from "react";

const BasicReactQuery = () => {
  // const { isPending, error, data } = useQuery({
  // 	queryKey: ['hello-world'],
  // 	queryFn: () =>
  // 	  Promise.resolve(5),
  //   })

  //   const { isPending, error, data } = useQuery({
  // 	queryKey: ['hello-world'],
  // 	queryFn: () =>
  // 	  Promise.reject(5),
  //   })

  const { isPending, error, data } = useQuery({
    queryKey: ["hello-world"],
    queryFn: () => new Promise((resolve) => setTimeout(() => resolve(5), 1000)),
  });

  console.log("{ isPending, error, data }", { isPending, error, data });

  return <div>BasicReactQuery</div>;
};

export default BasicReactQuery;
