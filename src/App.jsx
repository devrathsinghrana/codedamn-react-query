import React, { useState } from "react";
import "./App.css";
import BasicReactQuery from "./apps/BasicReactQuery";
import ToggleButtonReactQuery from "./apps/ToggleButtonReactQuery";
import GithubReposDataApp from "./apps/GithubReposDataApp";
import MiniBlogApp from "./apps/MiniBlogApp";
import GetQueryDataApp from "./apps/GetQueryDataApp";

function App() {
  const [app, setApp] = useState("basic-react-query-app");
  return (
    <>
      <div>
        <button onClick={() => setApp("basic-react-query-app")}>
          Basic React query app
        </button>
      </div>
      <div>
        <button onClick={() => setApp("toggle-button-react-query-app")}>
          Toggle Button React query app
        </button>
      </div>
      <div>
        <button onClick={() => setApp("github-repos-data-app")}>
          Github Repos Data App
        </button>
      </div>
      <div>
        <button onClick={() => setApp("mini-blog-app")}>Mini Blog App</button>
      </div>
      <div>
        <button onClick={() => setApp("get-query-data")}>
          Get quey data App
        </button>
      </div>

      {(() => {
        switch (app) {
          case "basic-react-query-app":
            return <BasicReactQuery />;
          case "mini-blog-app":
            return <MiniBlogApp />;
          case "toggle-button-react-query-app":
            return <ToggleButtonReactQuery />;
          case "github-repos-data-app":
            return <GithubReposDataApp />;
          case "get-query-data":
            return <GetQueryDataApp />;
          default:
            return <BasicReactQuery />;
        }
      })()}
    </>
  );
}

export default App;
