import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    html, body {
        overflow-x: hidden;
        background-color: var(--background-color);
        color: var(--font-light-color);
    }
    a{
        font-family: inherit;
        color: inherit;
        font-size: inherit;
        font-size: 1rem;
        text-decoration: none;
    }
    span{
        color: var(--primary-color);
    }
`;

export default GlobalStyle; 