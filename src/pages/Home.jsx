import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const {user} = useSelector(state => state.auth)
  const navigate = useNavigate()

  useEffect(() => {
    if(!user){
      navigate("/login")
    }
  },[user])


  return (
    <div className='container p-5'>
       <div className=' w-100 d-flex align-items-center justify-content-center flex-column'>
       <h4 className='display-4 text-dark'> Home Page</h4>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, voluptas fugit tempora iure minus aspernatur quae, nemo illum repellat consequuntur, expedita nobis consectetur. Architecto repudiandae, voluptatibus dolorum blanditiis sequi quam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsum vel laborum pariatur, officiis sapiente voluptatibus aliquam, molestias perferendis velit accusamus numquam id esse quod quasi cupiditate magni, ducimus sunt?
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid ex voluptatum laborum tempore corporis, quis cumque deleniti error? Reiciendis nostrum perspiciatis reprehenderit laboriosam fugit iusto iste! Voluptatibus harum neque adipisci!
    </p>
       </div>
      
    </div>
  )
}

export default Home
