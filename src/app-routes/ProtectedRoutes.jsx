import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import {useAuth} from "../context/index"

function ProtectedRoutes() {
    const {authState: { token }} = useAuth();
  return token ? <Outlet/> : <Navigate to={"/signin"} />
}

export default ProtectedRoutes