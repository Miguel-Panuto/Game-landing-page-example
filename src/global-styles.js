import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        background-color: #d5d5d5;
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased !important;
    }
`;

export const Center = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 2%;
`;

export const Clear = styled.div`
  clear: both;
`;
