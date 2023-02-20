import React from "react";
import Footers from "../../components/footer/footer";
import Popular from "../../components/Popular/popular";
import Bike from "../../components/vehicle/bike/bike";
import Cars from "../../components/vehicle/cars/cars";
import Motorbike from "../../components/vehicle/motorbike/motorbike";
import Search from "../../components/vehicle/search/search";
import VehicleNavbar from "../../components/vehicle/vehicle_navbar/vehicleNavbar";

function Vehicle() {
    return (
        <div>
            <VehicleNavbar  fixed="top" />
            <Search />
            <Popular/>
            <Cars />
            <Motorbike />
            <Bike />
            <Footers/>
        </div>
    )
}

export default Vehicle