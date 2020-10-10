import React, { useState } from "react"

const Context = React.createContext()

function ContextProvider(props) {
    const [navOpen, setNavOpen] = useState(false)
    const [index, setIndex] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)

    return (
        <Context.Provider value={{
            navOpen,
            setNavOpen,
            index, 
            setIndex,
            currentPage,
            setCurrentPage
        }}
        >
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
