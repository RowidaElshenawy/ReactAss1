import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router'
import NotFound from './components/NotFound/NotFound'


function App() {
  const [count, setCount] = useState(0)
  const routes = createBrowserRouter([
  {path:"" , element:<Layout/> , children:[
    {index:true,element: <Home/>},
    {path:"about" , element:<About/>},
    {path:"portfolio", element:<Portfolio/>},
    {path:"contact",element:<Contact/>},
    {path:"*" , element:<NotFound/>}
  ]}
])

  return (
    <>
      <RouterProvider router={routes}>
      
      </RouterProvider>
    </>
  )
}

export default App
