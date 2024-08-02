import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { registerUser } from '../features/auth/authSlice'


const Register = () => {

    // Getting Data From Auth State
    const { isLoading, user, isSuccess, isError, message } = useSelector(state => state.auth)
    // InitialZing Hooks
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // Form State
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: ""
    })

    // Destructure State
    const { name, email, password, password2 } = formData
    // From State Logic
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,

        })
    }

    // Form Submition
    const handleSubmit = (e) => {
        e.preventDefault()
        if (password !== password2) {
            toast.error("password not match")
        }
        dispatch(registerUser(formData))
    }


    useEffect(() => {
        if (user && isSuccess) {
            navigate("/")
        }
        if (isError && message) {
            toast.error(message)
        }
    }, [user, isSuccess, isError, message])

    if (isLoading) {
        return (
            <div className='loading-part d-flex align-items-center justify-content-center w-100'>
                <span className="spinner-border spinner-border-sm text-primary" aria-hidden="true"></span>
                <span className="mx-2 text-primary fw-bold" role="status">Loading...</span>
            </div>

        )
    }

    return (
        <div className='Registerpage w-100'>
            <div className='RegisterBox shadow-lg border'>
                <div className='Headline-from-Longin d-flex align-items-center justify-content-center' >
                    <h5 className='fw-bold text-primary'>Register Form</h5>
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name='name' placeholder='Enter your Name' className='form-control rounded-0 my-2'
                        value={name}
                        onChange={handleChange} />
                    <input type="email" name='email' placeholder='Enter your email' className='form-control rounded-0 my-2'
                        value={email}
                        onChange={handleChange} />
                    <input type="password" name='password' placeholder='Enter your password' className='form-control rounded-0 my-2'
                        value={password}
                        onChange={handleChange} />
                    <input type="password" name='password2' placeholder='Enter confirm password' className='form-control rounded-0 my-2'
                        value={password2}
                        onChange={handleChange} />
                    <button className='btn btn-sm btn-success rounded-0 my-4 w-50'> Save</button>
                </form>


            </div>

        </div>
    )
}

export default Register
