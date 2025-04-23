import React, { useState } from "react";
import "./App.css";
import BasicReactQuery from "./apps/BasicReactQuery";
import ToggleButtonReactQuery from "./apps/ToggleButtonReactQuery";

function App() {
  const [app, setApp] = useState("basic-react-query-app");
  return (
    <>
      <button onClick={() => setApp("basic-react-query-app")}>
        Basic React query app
      </button>
      <button onClick={() => setApp("toggle-button-react-query-app")}>
        Toggle Button React query app
      </button>
      {(() => {
        switch (app) {
          case "basic-react-query-app":
            return <BasicReactQuery />;
          case "toggle-button-react-query-app":
            return <ToggleButtonReactQuery />;
          default:
            return <BasicReactQuery />;
        }
      })()}
    </>
  );
}

export default App;
