import React from 'react'
import './H1tag.css'

type Prop= React.PropsWithChildren<{
        content :string
        variant?: 'white'|'black'
}>
const H1tag = ({content,variant}:Prop) => {
  return (
   <h1 className={`sharedH1tag ${variant}`}>
    {content}
   </h1>

  )
}

export default H1tag