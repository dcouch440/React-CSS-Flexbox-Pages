import React from 'react'

export const BasicNavbar = ({className, children}) => (
    <div className={className}>
        <div className='Nav-container'>
            {children}
        </div>
    </div>
)