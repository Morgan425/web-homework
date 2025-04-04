import React from 'react'
import './Button.css'

const Button = (props) => {

    const {text, type, onClick} = props
    const className = `buttons ${type}`

    return (
        <button className={className} onClick={onClick}>{text}</button>
    )
}

export default Button