
import './Public.css'

// import img from '../../assets/reusedimages/generalmeeting.svg'
import video from '../../assets/Videos/publicvideo.mp4'

const Public = () => {
  return (
    <div className='Publiccontainer'>
 
        <div className='container'>
        <h4>See What Happened Last Year</h4>
        <h1>Public Session / Exhibition</h1>
        </div>

        <div className='imagecontainer'>
           <video src={video} autoPlay loop  ></video>
        </div>


        <br /><br /><br /><br />





        <div className='imagecontainer'>
            {/* <img src={img} alt="" /> */}
        </div>









    </div>
  )
}

export default Public