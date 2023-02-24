import NavbarGuest from './navbarGuest';
import NavbarLogin from './navbarLogin';
import './style.css'

function Navbars(props) {
  if (props.isLoggedIn) {
    return <NavbarLogin position={props.position} />
  }
  return <NavbarGuest position={props.position}/>
}

export default Navbars;