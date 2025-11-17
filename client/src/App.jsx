import React from 'react'
import NavigationBar from './components/NavigationBar'
import Mainroutes from './routes/Mainroutes'

function App() {
  return (
    <div className='bg-gray-900 text-black overflow-x-hidden'>
      <NavigationBar />
      <Mainroutes />
    </div>
  )
}

export default App