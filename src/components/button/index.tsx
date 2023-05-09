import React from "react"
import { ButtonComponent } from "./button.types"

const Button: React.FC<ButtonComponent> = ({ title }: ButtonComponent) => {

    const event = () => {
        alert("esto es un evento")
    }

    return<button onClick={event}>{ title }</button>
}

export default Button