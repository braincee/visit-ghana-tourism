import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import SearchResultList from "../pages/SearchResultList"
import TourDetails from "../pages/TourDetails"
import Tour from "../pages/Tours"

const Routers = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/tour/search" element={<SearchResultList />}/>
            <Route path="/tours" element={<Tour />}/>
            <Route path="/tours/:id" element={<TourDetails />}/>
        </Routes> 
    </div>
  )
}

export default Routers;