import React, { useState } from "react";
// import useApi from "../../helpers/useApi";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
    // const [Users, setUsers] = useState({name:'username', email:'email', password:'password', role:'user'})

    // const refRegister = useRef(null)
    
    // const api = useApi()
    // const navigate = useNavigate()

    // const onChangeInput = (event) => {
    //     event.preventDefault()
    //     const data = {...Users}
    //     data[event.target.name] = event.target.value
    //     setUsers(data)
    // }

    // const register = () => {
    //     api.requests({
    //         method: 'POST',
    //         url: '/user',
    //         data: Users
    //     })
    //     .then((res) => {
    //         navigate('/auth/login')
    //         console.log(res);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })
    // }

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        
        axios.post('http://localhost:3001/user/', {name, email, password, role:'user'})
            .then(response => {
                console.log(response)
                navigate('/login')
            })
            .catch((err) => {
                console.log(err);
            })
    }
    
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    return (
        <div>
            <div className='login-container'>
                <div className='signup'>
                    <div className='signup-title'>Le'ts Explore The World</div>
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
                    <form action="" method="post" onSubmit={handleSubmit}>
                        <div className='login-input'>
                            <input type="input" value={name || ''} onChange={e => setName(e.target.value)} name="name" id="name" placeholder='Name' className='space'/> <br />
                            <input type="input" value={email || ''} onChange={e => setEmail(e.target.value)} name="email" id="email" placeholder='Email' className='space'/> <br />
                            <input type="input" value={password || ''} onChange={e => setPassword(e.target.value)} name="password" id="password" placeholder='Password'/><br />
                        </div>
                        <br />
                        <input type="submit" value="Sign Up"></input> 
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