import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system,BlinkMacSystemFont,Inter,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
}

html{
    font-family: sans-serif;
}

.App{
    display: flex;
    flex-direction: column;
}

.LineChartContainer{
    display:flex;
    flex-direction: row;
    margin: auto;
}

.recharts-responsive-container{
    margin: auto;
}

h1, h2{
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 24px;
    color: #278c79;
    margin:auto;
    margin-top: 0.5rem;
    text-align: center;
}

h2{
    font-size: 18px;
    line-height: 18px;
    margin-bottom: 1rem;
}

`;

export default GlobalStyle;
