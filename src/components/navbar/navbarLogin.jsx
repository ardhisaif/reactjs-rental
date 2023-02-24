import './style.css'

function NavbarLogin(props) {
    let font = {
        home: {},
        vehicle: {},
        history: {},
        about: {}
    }

    switch (props.position) {
        case "home":
            font.home.color = '#202336'
            break;
    
        case "vehicle":
            font.vehicle.color = '#202336'
            break;
    
        case "history":
            font.history.color = '#202336'
            break;
    
        case "about":
            font.about.color = '#202336'
            break;
    
        default:
            font.props.position = "B8BECD"
            break;
    }
    
    return (
        <div className='container'>
        <nav className='wrapper'>
            <div className='logo'>
            <div className='circle3'>
                <div className='circle2'>
                <div className='circle'></div>
                </div>
            </div>
            </div>
            <ul className='navigation'>
                <li><a href="/" style={font.home}>Home</a> </li>
                <li><a href="/vehicle" style={font.vehicle}>Vehicle Type</a> </li>
                <li><a href="/" style={font.history}>History</a> </li>
                <li><a href="/" style={font.about}>About</a> </li>
                <div className='email-icon'></div>
                <div className="photo-circle"></div>
            </ul>
        </nav>
        </div>
    )
}

export default NavbarLogin;