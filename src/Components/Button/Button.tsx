import React from 'react'
import './Button.css'

type Buttonprop=React.PropsWithChildren<{
    content:string,
    variants?:'brownishgrey'|'whiteoval'|'darkoval'|'graybackground'|'graysquarebackground'|'graybackground100'
    onClick ?:()=>void


}>

const Button = ({content,variants,onClick}: Buttonprop) => {
  return (
        <button onClick={onClick}  className={`sharedbutton ${variants}`}>
            {content}

        </button>
  )
}

export default Button