/** @jsx jsx */
import { jsx, Global, css } from "@emotion/core";
import React from "react";
import logo from "./logo.svg";
import "./App.css";

// import { jsx, Global, css } from "@emotion/core";

function App() {
  return (
    <div css={{}}>
      <Global
        styles={css`
          body {
            font-family: "Rubik", sans-serif;
            line-height: 1.25;
            margin: 0;
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      />

      <h1 css={{}}>Gaaaaaa</h1>
    </div>
  );
}

export default App;
