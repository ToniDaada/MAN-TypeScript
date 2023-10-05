
import './Speaker.css'

import newspeaker from '../../assets/reusedimages/Homeimages/newspeaker.jpeg'

const Speaker = () => {
  return (
    <div className='Speakercontainer'>
        
        <br /><br />
            <div className='Speakerheader'>
            {/* <img src={header} alt="" />
             */}
        
                  <h3 >Speaker</h3>
                  <div className='white'></div>
                 
                  <div className='Speakerheadercontainer'>
                  <div className='Speakerheadertext'>
          <h1>Olusegun Aganga CON</h1>
            
           <p>
           Former Director General United Nation Industrial Development Organization (UNIDO)
           
            
            </p> 
        </div>
        <div className='Speakerheaderimage'>

<img src={newspeaker} alt="" />

        </div>

                    
                  </div>

            </div>
     
      
            <div className='Speakertext'>
                <p>
                Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
        <br /><br />
Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
<br /><br />
Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
<br /><br />
                </p>
        </div>





    </div>
  )
}

export default Speaker