import React from 'react'
import { textData } from './textData'

export const TextDataMapper = ({index, page}) => {
    const pageData =  textData[index]
    
    return (
        <div>
            <h1>{pageData.title}</h1>
            {pageData.pages[page].map((paragraphs, i) => (
                <p key={i}>
                    {paragraphs}
                    <br />
                    <br />
                </p>
            ))}
        </div>
    )
}
