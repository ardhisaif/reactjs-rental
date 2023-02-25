import React from "react";
import Footers from "../../components/footer/footer";
import Register from "../../components/register/register";

function register() {
    return (
        <div>
            <Register  fixed="top" />
            <Footers/>
        </div>
    )
}

export default register