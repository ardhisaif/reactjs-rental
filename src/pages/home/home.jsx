import React from "react";
import Navbars from "../../components/navbar/navbar";
import Popular from "../../components/Popular/popular";
import Finder from "../../components/vehicleFinder/finder";

function Home() {
    return (
        <div>
            <Navbars fixed="top" />
            <Finder/>
            <Popular/>
            <h1>Hello World</h1>
        </div>
    )
}

export default Home