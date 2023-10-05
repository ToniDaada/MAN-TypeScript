import React from 'react'
import Button from '../Components/Button/Button'
import {useState} from 'react'
type Prop=React.PropsWithChildren<{
    content:string
}>



const ReadMore = ({content}:Prop) => {

    const[isReadMoreShown, setReadMoreShown] = useState(false)
    const toggleButton  =()=>{
        setReadMoreShown (prevState => !prevState)
    }


  return (
    <div className='read-more'>
        

{isReadMoreShown ? content : content.substring(0,319)}


<br />

<Button
            content='Read More'
            variants='graysquarebackground'
            onClick={toggleButton}
         
            
            />
    </div>
  )
}

export default ReadMore