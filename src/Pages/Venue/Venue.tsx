import './Venue.css'
import bigimage from '../../assets/reusedimages/Venueimages/bigimage.svg'
import map from '../../assets/reusedimages/Venueimages/map.svg'
import Button from '../../Components/Button/Button'
import H1tag from '../../Components/H1tag/H1tag'
import Ptag from '../../Components/Ptag/Ptag'
import {Link } from 'react-router-dom'
const Venue = () => {
  return (
    <div className='Venuecontainer'>
      
        <div className='top'>
            <div className='text'>
                <H1tag
                content='Venue'
                variant='black'
                                />
                <Ptag
                content='Lagos Oriental Hotel, Victoria Island, Lagos, Nigeria'
                variant='black'
                />
                <Link to="/register">
                <Button
                content='Register Now'
                variants='graysquarebackground'
                />
                </Link>
              

            </div>
            <div className='img'>
                <img src={map} alt="" />
            </div>
        </div>

        <div className='imagecontainer'>
        <img src={bigimage} alt="" />
        </div>

        <div className='buttoncontainer'>
            <Link to="/register">
            <Button
            content='Register Now'
            variants='graysquarebackground'
            />
            </Link>
          

        </div>
        








    </div>
  )
}

export default Venue