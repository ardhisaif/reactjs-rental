import React from "react";
import Footers from "../../components/footer/footer";
import Login from "../../components/login/login";

function login() {
    return (
        <div>
            <Login  fixed="top" />
            <Footers/>
        </div>
    )
}

export default login