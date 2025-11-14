import React from 'react'
import NavigationBar from './components/NavigationBar'
import Mainroutes from './routes/Mainroutes'

function App() {
  return (
    <div className='bg-gray-950 h-screen w-screen text-white'>
        <NavigationBar/>
        <Mainroutes/>
    </div>
  )
}

export default App