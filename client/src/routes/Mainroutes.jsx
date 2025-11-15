import { Route, Routes } from 'react-router-dom'
import Home from "../pages/Home"
import Profile from "../pages/Profile"
import Post from './../pages/Post';
import Register from './../pages/Register';
import Login from '../pages/Login';

function Mainroutes() {
  return (
    <div className='px-10'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/post' element={<Post />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default Mainroutes