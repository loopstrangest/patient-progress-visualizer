import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system,BlinkMacSystemFont,Inter,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
}

body{
    font-family: sans-serif;
    margin: 1rem;
}

.App{
    display: flex;
    flex-direction: column;
}

.LineChartContainer{
    display:flex;
    flex-direction: column;
    margin: auto;
    margin-top: 1.5rem;
    animation-duration:10;
}

.recharts-responsive-container{
    margin: auto;
}

h1, h2, h3{
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 24px;
    color: #278c79;
    margin:auto;
    text-align: center;
}

h2, h3{
    font-size: 18px;
    line-height: 18px;
}

h2{
    margin-top: 0.25rem;
}

h3{
    margin-bottom: 0.25rem;
}


`;

export default GlobalStyle;
