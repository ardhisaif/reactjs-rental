function Register() {
  return (
    <div>
        <div className='login-container'>
            <div className='signup'>
                <div className='signup-title'>Le’ts Explore The World</div>
                <div className='subtitle'>already have account?</div>
                <div className='button'>
                    <a href="/login" style={{textDecoration:'none', color:'#FFCD61'}}>Login</a>
                </div>
            </div>
            <div  className='divider'>
                <div className='circle1'></div>
                <hr id='hr-login'/>
                <div className='circle1'></div>
            </div>
            <div className='login-form'  style={{paddingTop:'129px'}}>
                <form action="">
                    <div className='login-input'>
                        <input type="input" placeholder='Name' className='space'/> <br />
                        <input type="input" placeholder='Email' className='space'/> <br />
                        <input type="input" placeholder='Password'/><br />
                    </div>
                    <br />
                    <input type="submit" id='login-submit' value="Sign Up"></input> 
                    <div className='login-google'>
                        <div className='google-text'>
                            <div id='google-logo'></div>
                            Sign Up with Google
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register;