import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './components/About/About'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github, { githubInfoLoader } from './components/Github/Github'

//creating a router Method 1

//  const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App/>,
//     children: [
//       {
//         path: '',
//         element: <Home/>,
//       },
//       {
//         path: 'about',
//         element: <About/>,
//       },
//       {
//         path: 'contact',
//         element: <Contact/>,
//       }
//     ]
//   }
  
//  ])

//creating a router Method 2
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path={""} element={<Home/>}/>
      <Route path={"about"} element={<About/>}/>
      <Route path={"contact"} element={<Contact/>}/>
      {/* Getting user Id from URL */}
      <Route path='user/:userId' element={<User/>}/>
      <Route
      // jse hi cursor github pe aae ga tab hi api call ho je gi (click krne se phle hi) ye sb kam loader ka hota hai. 
      // loader chal jata h useEfect call hone se phle hi
      // "loader" link pe hover hone pe hi chal je ga jbki useEffect click hone pe clta hai
      loader={githubInfoLoader} 
      //! Using loader to fetch data instead of useEffect because its a optimized approach & data gets loaded from api when we just hover over GitHub link 
      path='Github' 
      element={<Github/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
