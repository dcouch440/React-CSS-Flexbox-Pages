import React from 'react'

export const BasicNavbar = ({className, children}) => (
    <div className={className}>
        <div class='Nav-container'>
            {children}
        </div>
    </div>
)