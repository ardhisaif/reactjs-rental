import React from "react";
import Footers from "../../components/footer/footer";
import Navbars from "../../components/navbar/navbar";
import Popular from "../../components/Popular/popular";
import Finder from "../../components/vehicleFinder/finder";

function Home() {
    return (
        <div>
            <Navbars fixed="top" />
            <Finder/>
            <Popular/>
            <Footers/>
        </div>
    )
}

export default Home