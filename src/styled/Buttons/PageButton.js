import styled from 'styled-components'
import BasicButton from './_BasicButton'

export const PageButton = styled(BasicButton)`
    button {
        padding: 5px;
        background: #202020ab;
        border: 2px solid #ffffff30;
        border-radius: 26px;
        color: white;
        text-shadow: -2px 0px 13px #ffffff63;
        margin: 0 2px;
        &:hover {
            cursor: pointer;
            background-color: black;
            transition: .1s;
        }
        &:focus {
            outline: none;
            box-shadow: 0px 0px 0px 1px black;
        }
    }
`