import React, { useState, useContext, useEffect } from 'react'
import { TextDataMapper } from './TextData/TextDataMapper'
import { textData } from './TextData/textData'
import { PageButton } from '../../styled/Buttons/PageButton'
import { PageInput } from '../../styled/Inputs/PageInput'
import { Context } from '../../Context'
import styled from 'styled-components'

const HomeStyles = styled.div`
    width: 100vw;
    height: calc(100vh - 1%);
    overflow-y: hidden;
    .menu-button {
        z-index: 5;
        position: absolute;
        top: 2%;
        left: 2%;
        background-color: #b3866d24;
        padding: .3em;
        border: 1px solid #00000029;
        border-radius: 9px;
        color: #00000087;
        &:hover {
            background-color: #0000001a;
            transition: .2s;
        }
        &:focus {
            outline: none;
        }
    }
    .page-container {
        position: relative;
        display: flex;
        background-color: #fff7ec;      
        width: 99%;
        height: 98%;
        margin-top: 1%;
        margin-bottom: 1%;
        border: 1px solid #000;
        box-shadow: inset -4px 3px 3px 0px #2a2d3485, 20px 0px 20px 20px #00000026;
        overflow: scroll;
        overflow-x: hidden;
        z-index: 5;
    }
    .content {
        z-index: 5;
        position: relative;
        width: inherit;
        height: inherit;
        font-family: 'Sansita Swashed', cursive;
        padding: 1em 20% 1em 7%;
        text-shadow: -1px 0px 1px #969696, -1px -2px 0px #00000033;
        h1 {
            margin: 1em 0;
            text-align: center;
        }
        p {
            font-size: calc(10px + .8vw);
        }
    }
    .page-selector {
        position: fixed;
        bottom: 2%;
        right: 2%;
        .selector-cluster {
            bottom: 2%;
            right: 2%;
        }
        input {
            width: 100%;
            border-radius: 10px;
            padding: 0 0.3em;
            border: 1px solid black;
            &:focus {
                outline: none;
                box-shadow: 0px 0px 1px 1px black;
            }
        }
        .page-buttons {
            display: flex;
            padding: .2vw .10vw;       
            justify-content: center;
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
        }
        .current-page {
            text-align: center;
            font-family: fantasy;
            color: #000000a1;
            font-size: x-large;
            text-shadow: -1px 2px 0px #9a9a9a;
        }
    }
    @media only screen and (max-width: 900px) {        
        .page-selector {
            bottom: 1;
            right: 5%;
            padding: 0;
            margin: 0;
            width: 15%;
        }
        .page-buttons {
            button {
                font-size: 8px;
            }
        }
    }
    &::before,
    &::after {
        z-index: -1;
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
    }

    &::before {
        border-width: 1.5em;
        border-right-color: #7b4a2d;
        border-top-color: #7b4a2d;
    }

    &::after {
        border-radius: 0.4em;
        border-width: 1.43em;
        border-right-color: #cd9575;
        border-top-color: #cd9575;
    }
`
export const Home = () => {
    const [text, setText] = useState({page: ''})
    const {navOpen, setNavOpen, index, currentPage, setCurrentPage} = useContext(Context)
    const PAGES = textData[index].pages.length

    const handleChange = (event) => {
        const {name, value} = event.target
        setText({[name]: value})
    }
    // adds or subtracts from page count.
    const handleClick = (input) => {
        if (input === 'minus'){ 
            if (currentPage > 0) {
                setCurrentPage(prevPage => prevPage - 1)
            }
        }
        if (input === 'plus') {
            if (currentPage < PAGES - 1) {
                setCurrentPage(prevPage => prevPage + 1)
            }
        }
    }
    // sets page state from user input.
    const handleSubmit = (event) => {
        event.preventDefault()
        const pageNumber = parseInt(text.page - 1)
        console.log(pageNumber)
        if (typeof pageNumber === typeof 1) {
            setCurrentPage(pageNumber)
        }
    }
    // scrolls page to top after new page is loaded.
    useEffect(() => {
        document.querySelector('.page-container').scrollTop = 0;
    }, [currentPage])

    console.log(text)
    return (
        <>
            <HomeStyles>
                <div className='page-container'>
                    <div className='content'>
                        <TextDataMapper index={index} page={currentPage}/>
                    </div>
                    <div className='page-selector' style={{zIndex: '5'}}>
                        <div className='selector-cluster'>
                            <PageInput
                                onSubmit={(event) => handleSubmit(event)}
                                placeholder={`1 - ${PAGES}`}
                                name={'page'}                           
                                value={text.page}
                                onChange={handleChange}
                            />
                            <div className='page-buttons'>                           
                                    <PageButton onClick={() => handleClick('minus')} text={'Prev Page'}/>
                                    <PageButton onClick={() => handleClick('plus')} text={'Next Page'}/>           
                            </div>
                            <div className='current-page'>
                                {currentPage + 1}
                            </div>
                        </div>
                    </div>
                <button className='menu-button' onClick={() => setNavOpen(prev => !prev)}>
                    {navOpen === false ? '🢀' : '🢂'}
                </button>
                    
                </div>
            </HomeStyles>
        </>
    )
}