import './App.css'
import Home from './pages/Home.jsx'
import Reports from './pages/Reports.jsx'
import About from './pages/About.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Home/>
    },
    {
      path: "/about",
      element:<About/>
    },
    {
      path: "/reports",
      element:<Reports/>
    },
  ])
  return (
    <>
    <RouterProvider router = {router} />
    </>
  )
}

export default App
