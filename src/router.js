import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "./pages/login/login";
import Home from "./pages/home/home"
import Vehicle from "./pages/vehicle/vehicle";

function router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/vehicle" element={<Vehicle />} />
            </Routes>
        </BrowserRouter>
    )
}

export default router 