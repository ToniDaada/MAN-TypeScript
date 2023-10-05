
import './Inputlabel.css'

type Prop ={
    label?:string,
    type:'text'|'password'|'email'|'number'|'button'|'checkbox',
    placeholder:string
}

const Inputlabel = ({label,type,placeholder}:Prop) => {
  return (
    <div className='inputlabelcontainer'>
        <label>
            {label}
        </label>
        <br />
        <input type={type} placeholder={placeholder} />
    </div>
  )
}

export default Inputlabel