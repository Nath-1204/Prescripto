
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from "./Pages/HomePage";
import Doctors from "./Pages/Doctors"
import Login from "./Pages/Login"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import MyProfile from "./Pages/MyProfile"
import Appointments from "./Pages/Appointments"
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import MyAppointments from './Pages/MyAppointments';

function App() {

  return (
    <div className='mx-3 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/doctors' element={<Doctors />}/>
        <Route path='/doctors/:speciality' element={<Doctors />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/my-profile' element={<MyProfile />}/>
        <Route path='/my-appointments' element={<MyAppointments />}/>
        <Route path='/appointment/:docId' element={<Appointments />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App;