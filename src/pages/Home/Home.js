import React, { useState, useContext, useEffect } from 'react'
import { TextDataMapper } from './TextData/TextDataMapper'
import { textData } from './TextData/textData'
import { PageButton } from '../../styled/Buttons/PageButton'
import { PageInput } from '../../styled/Inputs/PageInput'
import { Context } from '../../Context'
import { HomeStyles } from './HomeStyles'

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