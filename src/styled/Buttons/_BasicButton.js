import React from 'react'

const BasicButton = ({className, text, onClick, onSubmit}) => (
    <div className={className}>
        <div>
            <button
                onClick={onClick}
                onSubmit={onSubmit}
                type="submit"
                >
                {text}
            </button>
        </div>
    </div>
)
export default BasicButton