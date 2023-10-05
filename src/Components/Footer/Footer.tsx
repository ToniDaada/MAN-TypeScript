import './Footer.css'
import logo from '../../assets/reusedimages/manlogo.svg'
import H1tag from '../H1tag/H1tag'
import Ptag from '../Ptag/Ptag'

import Button from '../Button/Button'
const Footer = () => {
  return (
    <div className='Footercontainer'>
        <div className='footertop'>
            <div className='footertopcontent'>
            <div>
                <H1tag
                content='Stay Connected'
                />
                <Ptag
                content='Get the latest Manufacturers  news and information delivered to your inbox.'
                variant='white'
                />

            </div>

          <Button
          content='SUBSCRIBE TO UPDATES'
          variants='whiteoval'
         
          />
            </div>
            
        </div>

        <div className='footerbelow'>
            <div className='left'>
                <div className='logo'>
                    <img src={logo} alt="" />
                </div>
                <br />
              
                <p>01-4542700, 01-4542701 </p>
                
                <p>info@manufacturersnigeria.org</p>
                <p>77, Obafemi Awolowo Way, Ikeja, Lagos State, Nigeria</p>
             
             <br />

             <Button 
             content='Our Services'
             variants='darkoval'
             />
            </div>

            <div className='right'>
                <p>Privacy</p>
                <p>Webmail Login</p>
            </div>
        </div>
       

    <br /><br/>
    </div>
  )
}

export default Footer