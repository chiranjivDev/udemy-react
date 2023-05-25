import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({setUser}) => {

    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');

    const navigate = useNavigate();
    const submitHandler = (e) =>{
        e.preventDefault();
        if(!username || !password){
            return;
        }
        setUser({
            username,
            password
        });

        navigate('/dashboard');
        
    };

    return <>
        <form onSubmit={submitHandler}>
            <label htmlFor='username'>Username</label>
            <input type='text'  id="username" onChange={(e)=>setUsername(e.target.value)} value={username}/>
            <label htmlFor='password'>Password</label>
            <input type='password'  id="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
            <button className="btn">Login</button>
        </form>
    </>
};

export default Login;