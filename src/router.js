import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "./pages/login/login";
import Home from "./pages/home/home"

function router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default router 