import { useMutation } from "@tanstack/react-query";
import React from "react";

const time = (duration, isError = false, params) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("params", params);
      isError ? reject("Promise rejected") : resolve("Promise resolved");
      console.log("Promise was run!!");
    }, duration);
  });
};

const MutationReactQueryApp = () => {
  const mutation = useMutation({
    mutationFn: (params) => time(1000, false, params),
    onSuccess: (data) => {
      // It can be successful with setQueryData where you can update UI based on post request response by mutating the cache
      console.log("Success", data);
    },
    onError: (err) => console.log("Error", err),
    onSettled: (data, err) => console.log("Settled", data, err),
  });

  const callMutate = async () => {
    console.log("Updating post...");
    await mutation.mutateAsync("Param from mutateAsync");
    console.log("Post updated");
  };

  const callMutateNotAsync = () => {
    console.log("Updating post...");
    mutation.mutate("Param from mutate", {
      onSuccess: (data) => {
        console.log("Success from mutate", data);
      },
      onError: (err) => console.log("Error from mutate", err),
      onSettled: (data, err) => console.log("Settled from mutate", data, err),
    }); //this will not return a promise
    console.log("Post updated");
  };

  return (
    <div>
      MutationReactQueryApp
      <button onClick={callMutate}>Submit form</button>
      <button onClick={callMutateNotAsync}>Submit form not async</button>
    </div>
  );
};

export default MutationReactQueryApp;
