
import './FAQ.css'
import arrow from '../../assets/reusedimages/downarrow.svg'

const FAQ = () => {
  return (
    <div className='FAQcontainer'>
        <div className='heading'>
        <h3>Frequently Asked Questions</h3>
            <h1>FAQs</h1>
        </div>
       

            <div className='questions'>
                <div className='insidequestions'>
                    <h3>Lorem Ipsum?</h3>
                   <button onClick={()=>{
                    alert("View more FAQs")
                   }}>
                        <img src={arrow} alt="" />
                   </button>
                </div>
                <div className='insidequestions'>
                    <h3>Lorem Ipsum?</h3>
                   <button>
                        <img src={arrow} alt="" />
                   </button>
                </div>
                <div className='insidequestions'>
                    <h3>Lorem Ipsum?</h3>
                   <button>
                        <img src={arrow} alt="" />
                   </button>
                </div>
                <div className='insidequestions'>
                    <h3>Lorem Ipsum?</h3>
                   <button>
                        <img src={arrow} alt="" />
                   </button>
                </div>
                <div className='insidequestions'>
                    <h3>Lorem Ipsum?</h3>
                   <button>
                        <img src={arrow} alt="" />
                   </button>
                </div>
                <div className='insidequestions'>
                    <h3>Lorem Ipsum?</h3>
                   <button>
                        <img src={arrow} alt="" />
                   </button>
                </div>
                
            </div>




    </div>
  )
}

export default FAQ