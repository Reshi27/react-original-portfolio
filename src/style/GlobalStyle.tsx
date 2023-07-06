import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


    html, body{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif;
        
    }

    h1 {
      font-family: "Roboto", sans-serif;
      font-weight: 700;
    }

    h2 {
      font-family: "Roboto", sans-serif;
      font-size: 24px;
      font-weight: 700;
    }

    p {
      font-family: 'Open Sans', sans-serif;
      font-size: 16px;
      line-height: 2;
    }
`;
