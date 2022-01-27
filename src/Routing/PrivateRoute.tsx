import React from 'react'
import { Route, Navigate } from 'react-router-dom'

type Props = {
  component: React.FC<any>
  redirectTo: string
  isAuth: boolean
  path: string
}

const PrivateRoute = ({ component: Component, redirectTo, isAuth, path, ...props }: Props) => {
  if (!isAuth) {
    return <Navigate to={redirectTo} />
  }
  return <Route path={path} element={<Component />} />
}

export default PrivateRoute
