import React, { useRef, useEffect, useContext } from 'react'
import { NavbarSidebar } from '../NavbarStyles/NavbarSidebar'
import { listItems } from './navbarList'
import { Context } from '../../../Context'


export const NavbarCompleteSidebar = () => {
    const listNodes = useRef([])
    const { navOpen, setIndex,  setCurrentPage } = useContext(Context)

    useEffect(() => {
        const handleClick = (i) => {
            const node  = listNodes.current[i].classList
            if (node.contains('expand')) {
                node.remove('expand')
                node.add('hide')
            }
            else {
                node.remove('hide')
                node.add('expand')
            }
        }
        const displayButton = document.querySelectorAll('.display-button');
        displayButton.forEach((button, i) => button.addEventListener('click', () => handleClick(i)))

    }, [listNodes])
    return (
        <>
            <NavbarSidebar show={navOpen === true ? 'none' : null}>
                    <div className='brand'>
                        Edition #1
                    </div>
                    <div className='list'>
                        <div>
                            {listItems.map(
                                (data, i) => {
                                    const objValues = Object.values(data).reverse().slice(1);
                                    const objTitles = data.head;
                                    return (
                                        <div key={i} className='div-list'>
                                            <button key={i} className='display-button'>{objTitles}</button>    
                                                <div ref={element =>  listNodes.current[i] = element} className='list-background hide'>
                                                    <ul>
                                                        {objValues.map(
                                                            (data, i) => (
                                                                <li>
                                                                    <div>
                                                                        <a href='/' onClick={(event) => {
                                                                            event.preventDefault()
                                                                            setIndex(i)
                                                                            setCurrentPage(0)
                                                                        }}>
                                                                            {data}
                                                                        </a>
                                                                    </div>
                                                                </li> 
                                                            )
                                                        )}
                                                    </ul>
                                                </div>               
                                        </div>
                                    )
                                }
                            )}
                        </div>
                    </div>
            </NavbarSidebar>
        </>
    )
} 
