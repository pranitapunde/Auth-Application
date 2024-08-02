import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login'
import Register from './pages/Register'


const App = () => {
  return (
    < Router>
      <Navbar />
      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/register' element={<Register/>}/>
       <Route path='/login' element={<Login/>}/>

      </Routes>
     <ToastContainer/>

    </Router>
  )
}

export default App
