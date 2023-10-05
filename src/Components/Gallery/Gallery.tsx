
import './Gallery.css'
import nigeriaflag from '../../assets/reusedimages/nigeriaflag.svg'
import img1 from '../../assets/reusedimages/Galleryimages/img1.svg'
import img2 from '../../assets/reusedimages/Galleryimages/img2.svg'
import img3 from '../../assets/reusedimages/Galleryimages/img3.svg'
import img4 from '../../assets/reusedimages/Galleryimages/img4.svg'
import img5 from '../../assets/reusedimages/Galleryimages/img5.svg'
import img6 from '../../assets/reusedimages/Galleryimages/img6.svg'
import img7 from '../../assets/reusedimages/Galleryimages/img8.svg'
import img8 from '../../assets/reusedimages/Galleryimages/img8.svg'
import img9 from '../../assets/reusedimages/Galleryimages/img9.svg'
import img10 from '../../assets/reusedimages/Galleryimages/img10.svg'
import img11 from '../../assets/reusedimages/Galleryimages/img11.svg'
import img12 from '../../assets/reusedimages/Galleryimages/img12.svg'



const Gallery = () => {
  return (
    <div className='Gallerycontainer'>
            <h1>Gallery for past Exhibitors</h1>
            <div className='imagecontainer'>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
                <img src={img7} alt="" />
                <img src={img8} alt="" />
                <img src={img9} alt="" />
                <img src={img10} alt="" />
                <img src={img11} alt="" />
                <img src={img12} alt="" />

            </div>
            <div className='countrycontainer'>
                <img src={nigeriaflag} alt="" />

            </div>
            <br /><br />
            <h1>Add Exhibitors Registration Page</h1>
    </div>
  )
}

export default Gallery