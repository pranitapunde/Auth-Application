import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { loginUser } from '../features/auth/authSlice'

const Login = () => {
    // Getting Data from auth state
    const { isLoading, user, isSuccess, isError, message } = useSelector(state => state.auth)
    // initial Sates
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // From state 
    const [formDatalog, setFormDatalog] = useState({
        email: "",
        password: ""
    })

    // Distructure State
    const { email, password } = formDatalog

    // from Sate Logic
    const handleChange = (e) => {
        setFormDatalog({
            ...formDatalog,
            [e.target.name]: e.target.value,
        })
    }

    // From Submission
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginUser(formDatalog))
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
        <div className='loginpage w-100'>
            <div className='loginBOx shadow-lg border'>
                <div className='Headline-from-Longin d-flex align-items-center justify-content-center' >
                    <h5 className='fw-bold text-primary'>Login Form</h5>
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="email" name='email' placeholder='Enter your email' className='form-control rounded-0 my-2'
                        value={email}
                        onChange={handleChange} />
                    <input type="password" name='password' placeholder='Enter your password' className='form-control rounded-0 my-2'
                        value={password}
                        onChange={handleChange} />

                    <button className='btn btn-sm btn-success rounded-0 my-4 w-50'> Save</button>
                </form>
            </div>

        </div>
    )
}

export default Login
