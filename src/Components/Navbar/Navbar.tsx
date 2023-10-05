import { NavLink } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/reusedimages/manlogo.svg'
import Button from "../Button/Button"


const Navbar = () => {
  return (
    <div className="Navbar">
        <div className="navtop">
        <div className='navlogo'>
            <img src={logo} alt="" />

        </div>
        <div className="navlinks" >
            <ul>
                
                <li>About Us</li>
                <li>Services</li>
                <li>Insights</li>
            <li>Membership</li>
                <li>Our Structure</li>
                <Button
            content="Join Now"
            />
            </ul>

          


         
        </div>

        </div>

      <div className="navline">

      </div>
      <br />
      <div className="navbottom">
        

      
            <NavLink to="/" style={ ({isActive})=>
          {
            return isActive?{color:' #555D42',textDecoration:'none'}:{textDecoration:'none'}
          
            }}>
            <li>Home</li>
            </NavLink>
    
            <NavLink to='./register'
            style={ ({isActive})=>
            {
              return isActive?{color:' #555D42',textDecoration:'none'}:{textDecoration:'none'}
            
              }}>
              <li>
              Register
              </li>
        
          </NavLink>
     
          <NavLink to='/general'
          style={ ({isActive})=>
          {
            return isActive?{color:' #555D42',textDecoration:'none'}:{textDecoration:'none'}
          
            }}>
              <li>
              Programme
              </li>
          </NavLink>

          <NavLink to='/speaker'
          style={ ({isActive})=>
          {
            return isActive?{color:' #555D42',textDecoration:'none'}:{textDecoration:'none'}
          
            }}>
        
        <li>Speaker(s)</li>
        </NavLink>
   


   <NavLink to='/Venue'
   style={ ({isActive})=>
   {
     return isActive?{color:' #555D42',textDecoration:'none'}:{textDecoration:'none'}
   
     }}
          >
            
          <li>
          Venue
          </li>
          </NavLink>
          
 

       <NavLink to='/exhibition'
       style={ ({isActive})=>
       {
         return isActive?{color:' #555D42',textDecoration:'none'}:{textDecoration:'none'}
       
         }}>
        
        <li>
        Exhibition
        </li>
  
   
      
                </NavLink>
              
     
   

<NavLink to='/FAQ' style={ ({isActive})=>
          {
            return isActive?{color:' #555D42',textDecoration:'none'}:{textDecoration:'none'}
          
            }}>
              <li>
                 
              FAQs
              </li>
     
         
          </NavLink>


        

      </div>
    </div>
  )
}

export default Navbar