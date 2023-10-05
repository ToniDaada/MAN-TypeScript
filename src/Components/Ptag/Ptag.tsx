import React from 'react'
import './Ptag.css'
type Prop = React.PropsWithChildren<{
        content?:string,
        variant ?: 'white'|'black'

}>
const Ptag = ({content,variant}:Prop) => {
  return (
    <>
  
    <p  className={`sharedptag  ${variant}` }>
    {content}
    </p>
    </>
  )
}

export default Ptag