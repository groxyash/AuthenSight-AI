import './App.css'
import Home from './pages/Home.jsx'
import Reports from './pages/Reports.jsx'
import About from './pages/About.jsx'
import Layout from './Layout.jsx'
import ProfileLayout from './ProfileLayout.jsx'
import Profile from './compnents/About/profile.jsx'
import { createBrowserRouter, RouterProvider ,createRoutesFromElements, Route,} from 'react-router-dom'



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
  <>
      {/* ROUTES WITH NAVBAR */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="reports" element={<Reports />} />
      </Route>

      {/* ROUTES WITHOUT NAVBAR */}
      <Route element={<ProfileLayout />}>
        <Route path="profile/:id" element={<Profile />} />
      </Route>
    </>

  )
  )
  return (
    <>
    <RouterProvider router = {router} />
    </>
  )
}

export default App
