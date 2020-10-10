import { BasicNavbar } from '../NavbarBaseFunctions/_BasicNavbar'
import styled from 'styled-components'

export const NavbarSidebar = styled(BasicNavbar)`
    position: static;
    box-sizing: border-box;
    justify-items: center;
    background-color: #2A2D34; 
    border: 1px solid #2f2f2f63;
    box-shadow: inset -10px 6px 20px 0px #00000000, 0px 3px 20px 3px #3d3d3db3, -1px -2px 20px 0px #00000047;
    padding: 1% 2% 0% 2%;
    height: 100%;
    width: calc(10em + 5%);
    text-align: center;
    display: ${({show}) => show};
    .brand {
        padding: 10px 10px;
        border-radius: 10px;
        font-family: 'Dancing Script',cursive;
        font-size: calc(10px + 1vw);
        color: #ffffffe8;
        text-shadow: 4px 1px 3px #000000, 0 0 5px black;
        background-color: goldenrod;
        border: 2px inset #6f6f6fd9;
        box-shadow: inset 0 0 20px 6px #00000029, -7px -2px 20px 10px #3d3d3d69, inset -17px -5px 20px 20px #3d3d3d00, 0 0 6px 2px #3535358a;   
    }
    .div-list {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    button {
        font-family: 'Dancing Script',cursive;
        box-shadow: inset -20px 16px 20px 1px #0a0a0a26, inset 0 0 9px 4px #ffffff2e, 0px 3px 7px 4px #00000017;
        margin-top: 20%;
        width: 90%;
        border-radius: 30px;
        border: 2px outset #3b3b3b;
        background-color: #CD7F32;
        background: linear-gradient(to bottom, #CD7F32 0%, #BE7023 100%);
        padding: 1em 1em;
        font-size: calc(8px + .5em);
        color: #ffffffe8;
        text-shadow: 4px 1px 3px #000000, -2px 1px 4px black;
        &:hover {
            box-shadow: 0 0 10px 2px #ffffff24, inset 0 0 5px 4px #ffffff30; 
            font-size: calc(inherit + 10px);
            transition: .5s;
        }
        &:focus {
            outline: none;
            box-shadow: 0px 0px 0px 3px white;
        }
    }
    .list-background {
        width: 100%;
        border: 3px inset #2f4f4f75;
        background-color: #85858540;
        box-shadow: inset -7px -9px 20px 20px #0000000d, 0px 0px 9px 7px #0000001f, inset 0 0 20px 20px #31303026, inset -20px -18px 20px 20px #5a5a5a00, 0 0 14px #4d4d4d;
        border-radius: 30px;
        margin: 10px 0 0 0;
        overflow: hidden;
    }
    li {
        list-style-type: none;
        width: 100%;
        height: inherit;
        a {
            font-family: 'Dancing Script',cursive;
            background-color: #ffffff;
            box-shadow: inset -10px 61px 20px 0px #333333bd, inset 10px 0px 20px #333333bd;
            display: block;
            width: 100%;
            height: inherit;
            padding: 1em 0;
            color: #cf9d1e;
            text-shadow: -1px 0px 13px black;
            text-decoration: none;
            &:hover {
                background-color: #0000005e;
                transition: .5s;
            }
        }
    }
    .expand {
        display: initial;
        height: inherit;
    }
    .hide {
        display: none;
        height: 0;
    }
`;
