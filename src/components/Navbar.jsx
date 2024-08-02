import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link} from 'react-router-dom'
import { logoutUser } from '../features/auth/authSlice'

const Navbar = () => {
  const { user } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const LogOut =() => {
    dispatch(logoutUser())
  }

  return (
    <nav className="navbar bg-info">
      <div className="container-fluid">
        <Link to={'/'}><span className="navbar-brand mb-0 h1 text-light fw-bold">Authentication</span></Link>
        <span>
          {
            user ? (
              <button className='btn btn-sm btn-danger mx-2' onClick={LogOut}> Logout</button>

            ) : (
              <>
                <Link to={"/register"}><button className='btn btn-sm btn-primary rounded-0  mx-2'>Register</button></Link>
                <Link to={"/login"}><button className='btn btn-sm btn-success rounded-0 '> Login</button></Link>
              </>
            )
          }
        </span>
      </div>
    </nav>
  )
}

export default Navbar
