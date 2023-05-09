import React from "react"
import { MessageComponent } from "./message.types"

const Message: React.FC<MessageComponent> = ({ message }: MessageComponent) => <h1>Hola desde { message }</h1>

export default Message