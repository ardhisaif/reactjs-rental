import './login.css'

function Login() {
  return (
    <div>
        <div className='login-container'>
            <div className='signup'>
                <div className='signup-title'>Le’ts Explore The World</div>
                <div className='subtitle'>Don’t have account?</div>
                <div className='button'>
                    <a href="/signup">Sign Up</a>
                </div>
            </div>
            <div  className='divider'>
                <div className='circle1'></div>
                <hr id='hr-login'/>
                <div className='circle1'></div>
            </div>
            <div className='login-form'>
                <form action="">
                    <div className='login-input'>
                        <input type="input" placeholder='Email' className='space'/> <br />
                        <input type="input" placeholder='Password'/><br />
                    </div>
                    <div className='forgot-password'>
                        <a href="/" >Forgot password?</a> <br />
                    </div>
                    <input type="submit" id='login-submit' value="Login"></input>
                    <div className='login-google'>
                        <div className='google-text'>
                            <div id='google-logo'></div>
                            Login with Google
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login;