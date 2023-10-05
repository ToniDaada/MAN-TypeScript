import './General.css'
import Button from '../../Components/Button/Button'
 import img from '../../assets/reusedimages/newgeneralmeeting.jpeg'
import {Link} from 'react-router-dom'


const General = () => {
  return (
    <div className='Generalcontainer'>
        <div className='text'>
            <div className='generaltext'>
                <h1>Annual General Meeting 2023</h1>

             <Link to='/register'> 
             <Button
                content='Register'
                variants='graysquarebackground'
                />
             </Link>
             
            
         
            </div>
            <div className='generalimage' >
                <img src={img} alt="" />

            </div>

        </div>

        <div className='days'>
            <h1 style={{textAlign:'center',fontWeight:'500'}}>DAY 1</h1>
            <div style={{display:'flex',justifyContent:"space-between",alignItems:"center",width:'90%',margin:"0 auto",borderBottom:'1px solid #0C1B4D1A', padding:'10px',marginBottom:"100px"}}>
                <p style={{width:'20%',fontWeight:"500"}}>October 17, 2023</p>
                <h2 style={{width:'40%',fontWeight:"500",color:"#2B3513"}}>Opening Ceremony for Made In Nigeria Exhibition</h2>
                    <Link to='/openingceremony'>
                    <Button
                content='See Highlights'/>
                    </Link>

            </div>
      
        </div>

        <div className='days'>
            <h1 style={{textAlign:'center',fontWeight:'500'}}>DAY 2</h1>
            <div style={{display:'flex',justifyContent:"space-between",alignItems:"center",width:'90%',margin:"0 auto",borderBottom:'1px solid #0C1B4D1A', padding:'10px',marginBottom:"100px"}}>
                <p style={{width:'20%',fontWeight:"500"}}>October 18, 2023</p>
                <h2 style={{width:'40%',fontWeight:"500",color:"#2B3513"}}>Public Session / 3rd Adeola Odutola Lecture Exhibition</h2>
             <Link to='/public'>
             <Button
                content='See Highlights'/>
             </Link>

            </div>
      
        </div>



        <div className='days'>
            <h1 style={{textAlign:'center',fontWeight:'500'}}>DAY 3</h1>
            <div style={{display:'flex',justifyContent:"space-between",alignItems:"center",width:'90%',margin:"0 auto",borderBottom:'1px solid #0C1B4D1A', padding:'10px',marginBottom:"100px"}}>
                <p style={{width:'20%',fontWeight:"500"}}>October 19, 2023</p>
                <h2 style={{width:'40%',fontWeight:"500",color:"#2B3513"}}>Private Session Exhibition</h2>

                <Link to="/private">
                <Button
                content='See Highlights'/>

                </Link>
            </div>
      
        </div>


        <div className="daysbuttoncontainer">
            <Link to="/register">
            <Button
                content='Register'
                variants='graysquarebackground'
                />
            </Link>
         
        </div>


    </div>
  )
}

export default General