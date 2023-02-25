import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "./pages/login/login";
import Home from "./pages/home/home"
import Vehicle from "./pages/vehicle/vehicle";
import Register from "./pages/register/register";
import Detail from "./pages/detail/detail";

function router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Register />} />
                <Route path="/vehicle" element={<Vehicle />} /> 
                <Route path="/vehicle/:id" element={<Detail />} /> 
            </Routes>
        </BrowserRouter>
    )
}

export default router 