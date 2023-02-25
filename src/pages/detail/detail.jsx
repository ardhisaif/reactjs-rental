import Navbars  from "../../components/navbar/navbar";
import Details from '../../components/detail/detail';

import Footers from "../../components/footer/footer";

function Detail() {
    const isLoggedIn = true
    return (
        <div>
            <Navbars position={"vehicle"} isLoggedIn={isLoggedIn}  fixed="top" />
            <Details />
            <Footers />
        </div>
    )
}

export default Detail