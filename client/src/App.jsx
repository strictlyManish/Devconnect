import React from 'react'
import NavigationBar from './components/NavigationBar'
import Mainroutes from './routes/Mainroutes'

function App() {
  return (
    <div className='bg-gray-700 h-screen w-screen text-black overflow-x-hidden z'>
      <NavigationBar />
      <Mainroutes />
    </div>
  )
}

export default App