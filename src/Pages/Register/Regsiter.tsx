
import './Register.css'

import Inputlabel from '../../Components/Inputlabel/Inputlabel'
import plus from '../../assets/reusedimages/plusimage.svg'
import Button from '../../Components/Button/Button'

const Regsiter = () => {
  return (
    <div className='Registercontainer'>
    

        <div style={{textAlign:'center',fontSize:'30px'}}>
           <h1 style={{color:'#2B3513'}}>Register Now!</h1>
           <p style={{fontSize:'16px'}}> to be a part of the event</p>
           <h3 style={{fontSize:'29px'}}>Fill the information carefully</h3>
        </div>

        <div className='formcontainer'>
        <Inputlabel
        label='Company Name *'
        placeholder='Enter company name'
        type='text'
        />
         <Inputlabel
        label='Company Address  *'
        placeholder='Enter company address'
        type='text'
        />
         <Inputlabel
        label='Participant Name  *'
        placeholder='Enter participant name'
        type='text'
        />
         <Inputlabel
        label='Participant Designation'
        placeholder='Enter Participant Designation'
        type='text'
        />
         <Inputlabel
        label='Participant Email Address'
        placeholder='Enter email address'
        type='email'
        />
         <Inputlabel
        label='Participant Phone Number'
        placeholder='Enter mobile number'
        type='text'
        />

<div className='container'>
<button  
onClick={()=>{
    alert('Add a new participant')
}}

style={{border:'none',background:'transparent',cursor:'pointer',textAlign:'center'}}>
                <img src={plus} alt="" />
            </button>
            <h3 >Add New Participants </h3>
</div>

      



         <Inputlabel
        label='Amount'
        placeholder='Enter Amount'
        type='text'
        />


        <Button
        content='PROCEED TO PAY'
        variants='graybackground100'
        onClick={()=>{
          alert("Proceed to Checkout?")
        }}
        />



        </div>



    </div>
  )
}

export default Regsiter