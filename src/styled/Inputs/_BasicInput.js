import React from 'react'

export const BasicInput = ({className, placeholder, name, onSubmit, value, onChange, label}) => (
    <div className={className}>
        <form onSubmit={onSubmit}>
            <input
            type='text'
            label={label}
            value={value}
            onChange={onChange}
            name={name}
            placeholder={placeholder}
            autoComplete='off'
            />
        </form>
    </div>
) 