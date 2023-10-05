import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import './App.css'
import Speaker from './Pages/Speaker/Speaker'
import Host from './Pages/Host/Host'
import SpecialGuest from './Pages/SpecialGuest/SpecialGuest'
import Venue from './Pages/Venue/Venue'
import Regsiter from './Pages/Register/Regsiter'
import OPeningCeremony from './Pages/OpeningCeremony/OPeningCeremony'
import Private from './Pages/Private/Private'
import Public from './Pages/Public/Public'
import Exhibition from './Pages/Exhibition/Exhibition'
import FAQ from './Pages/FAQ/FAQ'
import General from './Pages/General/General'
import Home from './Pages/Home/Home'
import {Route, Routes} from 'react-router-dom'




function App() {

  return (
    <>



      <div className='App'>
        <Navbar/>
        <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/FAQ' element={<FAQ/>} />
    <Route path='/speaker' element={<Speaker/>} />
    <Route path='/host' element={<Host/>} />
    <Route path='/specialguest' element={<SpecialGuest/>} />
    <Route path='/venue' element={<Venue/>} />
    <Route path='/register' element={<Regsiter/>} />
    <Route path='/openingceremony' element={<OPeningCeremony/>} />
    <Route path='/private' element={<Private/>} />
    <Route path='/public' element={<Public/>} />
    <Route path='/exhibition' element={<Exhibition/>} />
    <Route path='/general' element={<General/>}/>

    


   
        </Routes>
        <Footer/>
      </div>
   
    </>
  )
}

export default App
