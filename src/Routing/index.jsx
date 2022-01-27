import { Routes, Route } from 'react-router'
import Dashboard from '../components/Dashboard/Dashboard'
import Login from '../components/Login/Login'

// import PrivateRoute from './PrivateRoute'

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default Routing
