import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import queryClient from "../react-query-client";

const baseUrl = "http://localhost:3000";
const fetcher = (url, body, method = "GET") =>
  fetch(baseUrl + url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
const ToDoApp = () => {
  const [tempLang, setTempLang] = useState("");
  const mutation = useMutation({
    mutationFn: (body) => fetcher(`/api/create-record`, body, "POST"),
    onSuccess: (data) => {
      setTempLang("");
      // re fetches the query
      queryClient.invalidateQueries("favLangs");
    },
    onError: (err) => {},
    onSettled: (data, err) => {},
  });

  const {
    data: favLangs,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["favLangs"],
    queryFn: () => {
      return fetcher("/api/get-records").then((t) => t.json());
    },
    select: (data) => data.langs,
  });
  function callMutate() {
    mutation.mutate({ record: tempLang });
  }
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>Error with request</h2>;
  }
  return (
    <div>
      ToDoApp
      <h2>Some favorite languages</h2>
      <ul>
        {favLangs.map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
      <input
        type="text"
        value={tempLang}
        onChange={(e) => setTempLang(e.target.value)}
      />
      <button onClick={callMutate}> Submit</button>
    </div>
  );
};

export default ToDoApp;
