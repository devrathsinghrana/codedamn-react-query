import { useMutation } from "@tanstack/react-query";
import React from "react";

const time = (duration) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
      console.log("Promise was run!!");
    }, duration);
  });
};

const MutationReactQueryApp = () => {
  const mutation = useMutation({ mutationFn: () => time(1000) });

  const callMutate = async () => {
    console.log("Updating post...");
    await mutation.mutateAsync();
    console.log("Post updated");
  };

  return (
    <div>
      MutationReactQueryApp
      <button onClick={callMutate}>Submit form</button>
    </div>
  );
};

export default MutationReactQueryApp;
