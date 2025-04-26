import { useMutation } from "@tanstack/react-query";
import React from "react";

const time = (duration, isError = false) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      isError ? reject("Promise rejected") : resolve("Promise resolved");
      console.log("Promise was run!!");
    }, duration);
  });
};

const MutationReactQueryApp = () => {
  const mutation = useMutation({
    mutationFn: () => time(1000),
    onSuccess: (data) => {
      // It can be successful with setQueryData where you can update UI based on post request response by mutating the cache
      console.log("Success", data);
    },
    onError: (err) => console.log("Error", err),
    onSettled: (data, err) => console.log("Settled", data, err),
  });

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
