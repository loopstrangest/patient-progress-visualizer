import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;   
}

body{
    font-family: -apple-system,BlinkMacSystemFont,Inter,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    background-color: #fbfcf9;
    margin: 2vh 2vw;
}

.App{
    width: 95vw;
    height: 95vh;
    display: flex;
}

.Container{
    display: flex;
    flex-direction: column;
    margin: auto;
}

/* Distinguish between title, subtitle, chart title */
h1, h2, h3{
    font-family: 'Rasa', sans-serif;
    font-weight: 500;
    font-size: 24px;
    color: #595c5e;
    margin:auto;
    text-align: center;
}

h2, h3{
    font-size: 18px;
    line-height: 18px;
}

h3{
    font-family: 'Inter', sans-serif;
    margin-bottom: 0.25rem;
}

.LineChartContainer{
    display:flex;
    flex-direction: column;
    margin: auto;
    margin-top: 2.5%;
    width:90vw;
    height:60vh;
}

/* Chart height responsiveness to viewport height */
@media(min-height: 400px){
    .LineChartContainer{
        height:65vh;    
    }
}

@media(min-height: 500px){
    .LineChartContainer{
        height:70vh;    
    }
}

@media(min-height: 600px){
    .LineChartContainer{
        height:75vh;    
    }
}

@media(min-height: 700px){
    .LineChartContainer{
        height:80vh;    
    }
}

/* Chart and label spacing */
.recharts-responsive-container{
    margin: auto;
}

.recharts-label{
    text-anchor: middle;
    fill: #595c5e;
}

`;

export default GlobalStyle;
