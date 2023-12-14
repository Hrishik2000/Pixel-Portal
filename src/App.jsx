
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'


function App() {

  return (
    <>
    {/* header & footer has fixed data for all pages */}
    {/* changing data comes in outlet */}
    
      <Header/>
      <Outlet/>
      <Footer/>

    </>
  )
}

export default App
