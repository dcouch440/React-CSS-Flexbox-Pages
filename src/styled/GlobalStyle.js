import {createGlobalStyle} from  'styled-components'

export const GlobalStyle = createGlobalStyle` 
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html, body {
        width: 100%;
        height: 100%;
    }
    #root {
        height: 100%;
        width: 100%;
    }
`;