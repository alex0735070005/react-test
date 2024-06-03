/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";

export const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      html,
      body {
        height: 100%;
        font-family: Arial, sans-serif;
      }
      li {
        margin: 0;
        padding: 0;
        list-style-type: none;
      }
    `}
  />
);
