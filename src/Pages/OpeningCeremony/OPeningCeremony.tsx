import './OpeningCeremony.css'
import video from '../../assets/Videos/openingvideo.mp4'

const OPeningCeremony = () => {
  return (
    <div className='Ceremonycontainer'>
       
        <div className='container'>
        <h4>See What Happened Last Year</h4>
        <h1>Opening Ceremony Highlight</h1>
        </div>

        <div className='imagecontainer'>
         <video src={video} autoPlay loop ></video>
        </div>
     
 

    </div>
  )
}

export default OPeningCeremony