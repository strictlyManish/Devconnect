import { Route, Routes } from 'react-router-dom'
import Home from "../pages/Home"
import Profile from "../pages/Profile"
import Post from './../pages/Post';
import Register from './../pages/Register';

function Mainroutes() {
  return (
    <div className='px-10'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/post' element={<Post />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default Mainroutes