
function VehicleNavbar() {
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
          <li><a href="/">Home</a> </li>
          <li><a href="/vehicle"  style={{color:'#202336'}}>Vehicle Type</a> </li>
          <li><a href="/">History</a> </li>
          <li><a href="/">About</a> </li>
          <li><a href="/login" className='login' style={{color:'#393939'}}>Login</a> </li>
          <li><a href="/" className='register' style={{color:'#393939'}}>Register</a> </li>
        </ul>
      </nav>
    </div>
  )
}

export default VehicleNavbar;