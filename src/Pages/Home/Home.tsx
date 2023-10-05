import './Home.css'

import img1 from '../../assets/reusedimages/Homeimages/ChiefHost.svg'
import img2 from '../../assets/reusedimages/Homeimages/GuestHonour.svg'
import img3 from '../../assets/reusedimages/Homeimages/newspeaker.jpeg'
import sidearrow from '../../assets/reusedimages/sidearrow.svg'
import img4 from '../../assets/reusedimages/homereused.svg'
import img5 from '../../assets/reusedimages/calendar.svg'
import img6 from '../../assets/reusedimages/venue.svg'
import {Link} from 'react-router-dom'
import Button from '../../Components/Button/Button'




const Home = () => {
  return (
    <div className='Homecontainer'>
            <div className='homeheader' 
            >
               <div className='homeheaderpicture'>
                    <div className='homeheadertext'>

                    <h1>
                    Setting the agenda for competitive manufacturing under the AfCFTA: What Nigeria needs to do.
                    </h1>
                    <Link to='/register'>
                    <Button
                    content='Register'
                    variants='graysquarebackground'/>



                    </Link>
                  
                    </div>
                
               </div>
            
            </div>

        <div className='hometext'>
        
    <h2>
   
    The 51st Annual General Meeting

    </h2>
<p>
The 51st Annual General Meetings of the Manufacturers Association of Nigeria will be held in Lagos at Oriental Hotel. In its usual tradition, it will feature a three-day Made in Nigeria Exhibition, a private session, and a public session. The 3rd Edition of the Adeola Odutola Lecture will serve as the public session of the 51st AGM. This year's theme is 'Setting the Agenda for Competitive Manufacturing under the African Continental Free Trade Area (AfCFTA): What Nigeria Needs to Do.' It is considered a critical discussion on the state of the nation regarding manufacturing and the agenda for competitive manufacturing under the AfCFTA. We are honored to have distinguished speakers, panelists, and guests from various sectors, including top government officials, MAN member-companies, our friends from the international community, and thoughtful leaders. We invite all delegates to join us in this historic celebration and share their insights and perspectives. We look forward to welcoming you at the 51st AGM.
            </p>

        </div>
        <div className='homeimages'>
            <div>
            <img src={img1} alt="" className='images' />
            <div style={{display:'flex', width:'70%',margin:'0 auto', justifyContent:'space-between'}}>
            <p  style={{fontWeight:'600'}}>Chief Host
              
                
                 </p>
                 
                <Link to='/host'>
                <img src={sidearrow} alt=""  />
                </Link>
         
          
            </div>
           
            </div>

          <div>
          <img src={img2} alt=""  className='images' />
          <div style={{display:'flex', width:'70%',margin:'0 auto', justifyContent:'space-between'}}>
            <p  style={{fontWeight:'600'}}>Special Guest of Honour
              
                
                 </p>  
                 <button>
                 <Link to='/specialguest'>
                              <img src={sidearrow} alt=""  />
           
                 </Link>

                 </button>
                
          


            </div>
          </div>
            
            <div> 
            <img src={img3} alt="" className='images'  />
            <div style={{display:'flex', width:'70%',margin:'0 auto', justifyContent:'space-between'}}>
            <p   style={{fontWeight:'600'}}>
            Meet the Speaker
              
                
                 </p>
             <button>
             <Link to='/speaker'>
               
               <img src={sidearrow} alt=""  />
          
          </Link>


             </button>
       
            </div>

            </div>
           
           


        </div>
        <div className='homeimages'>
        <div>
            <img src={img4} alt="" className='images' />

            <div style={{display:'flex', width:'70%',margin:'0 auto', justifyContent:'space-between'}}>
            <p  style={{fontWeight:'600'}} >

            Participate in the  3-day Exhibition
              
                
                 </p>
              
                    <button>
                         <Link to='/exhibition'>
                         <img src={sidearrow} alt=""  />
                         </Link>
                  
                    </button>
             
               


            </div>
            </div>
            <div>
            <img src={img5} alt="" className='images' />

            <div style={{display:'flex', width:'70%',margin:'0 auto', justifyContent:'space-between'}}>
            <p   style={{fontWeight:'600'}}>

            Save The Date 17-19 October 2023
              
                
                 </p>
                 <button>
                 <Link to='/'>
              
              <img src={sidearrow} alt=""  />
              
        
            </Link>
                
         

                 </button>
           
                


            </div>
            </div>
            <div>
            <img src={img6} alt="" className='images' />
            <div style={{display:'flex', width:'70%',margin:'0 auto', justifyContent:'space-between'}}>
            <p   style={{fontWeight:'600'}}>

            The Venue
              
                
                 </p>

                    <button>
                         <Link to='/venue'>
                         <img src={sidearrow} alt=""  />
                         
                         </Link>
                
                    </button>


            </div>
            </div>

            <br /><br /><br /><br />



        </div>


        <div className='buttoncontainer'>

          <Link to='/register'>
          <Button

content='Click here to register'
variants='graybackground100'
/>
          </Link>
   


        </div>


       

    </div>
  )
}

export default Home