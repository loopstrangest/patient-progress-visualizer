import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}

body{
    font-family: -apple-system,BlinkMacSystemFont,Inter,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    margin: 1rem;
    background-color: #fbfcf9;
}

.App{
    display: flex;
    flex-direction: column;
}

h1, h2, h3{
    font-family: 'Rasa', sans-serif;
    font-weight: 500;
    font-size: 24px;
    color: #595c5e;
    margin:auto;
    text-align: center;
}

h2{
    font-size: 18px;
    line-height: 18px;
    margin-top: 0.25rem;
}

h3{
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    line-height: 16px;
    margin-bottom: 0.25rem;
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

.recharts-label{
    text-anchor: middle;
    fill: #595c5e;
}

button:hover{
    background-color: #6d9147;
}


`;

export default GlobalStyle;
