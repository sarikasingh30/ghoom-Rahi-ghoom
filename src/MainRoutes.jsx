import React from 'react'
import { Route, Routes } from 'react-router'
import Login from './pages/Login'
import { Home } from './pages/Home'

const MainRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>} />

                <Route path='/login' element={<Login />} />
            </Routes>
        </>
    )
}

export default MainRoutes