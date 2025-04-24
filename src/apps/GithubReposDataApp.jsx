import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const fetcher = (repoName) =>
  fetch(`https://api.github.com/repos/${repoName}`).then((res) => res.json());

const GithubReposDataApp = () => {
  const [repoName, setRepoName] = useState("reduxjs/redux");

  const { isLoading, data } = useQuery({
    queryKey: ["github-data", repoName],
    queryFn: () => fetcher(repoName),
  });

  return (
    <div>
      <input
        type="text"
        name="repo-name"
        value={repoName}
        onChange={(e) => setRepoName(e.target.value)}
      />
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <p>Name: {data.name}</p>
          <p>Description: {data.description}</p>
        </>
      )}
    </div>
  );
};

export default GithubReposDataApp;
