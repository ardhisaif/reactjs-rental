import React from "react";
import Footers from "../../components/footer/footer";
import Popular from "../../components/Popular/popular";
import Bike from "../../components/vehicle/bike/bike";
import Car from "../../components/vehicle/car/car";
import Motorbike from "../../components/vehicle/motorbike/motorbike";
import Search from "../../components/vehicle/search/search";
import Navbars from "../../components/navbar/navbar";

function Vehicle() {
    const isLoggedIn = true

    return (
        <div>
            <Navbars position={"vehicle"} isLoggedIn={isLoggedIn} fixed="top" />
            <Search />
            <Popular/>
            <Car />
            <Motorbike />
            <Bike />
            <Footers/>
        </div>
    )
}

export default Vehicle