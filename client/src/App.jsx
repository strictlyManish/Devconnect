import NavigationBar from './components/NavigationBar'
import Mainroutes from './routes/Mainroutes'

function App() {

  return (
    <div className='bg-gray-800 text-black  overflow-x-hidden overflow-auto'>
      <NavigationBar/>
      <Mainroutes />
    </div>
  )
}

export default App