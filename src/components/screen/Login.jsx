import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import M from "materialize-css";
import './css/auth.css'

const Login = () =>{
    const navigate  = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const signIn = () => {
        if ( !email || !password){
            M.toast({html: 'Please add all the fields value', classes: '#e57373 red darken-1'})
            return 
        }
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            M.toast({html: 'Invalid email', classes: '#e57373 red darken-1'})
            return 
        }
        fetch('/sign-in', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                email,
                password
            })
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.error){
                M.toast({html: data.error, classes: '#e57373 red darken-1'})
            }
            else{
                M.toast({html: data.message, classes: '#43a047 green darken-1'})
                navigate('/')
            }
            console.log(data);
        })
        .catch(err=>{
            console.log("error in sign up", err);
        })
    }

    return(
        <>
            <div>
                <div className="card auth-card">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="head">
                                <img src="images\logo\logo.png" alt="Logo" />
                            </div>
                        </div>
                        <div className="col-md-12 input-field">
                        <input 
                                type="email" 
                                placeholder="Email"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                            <input 
                                type="password" 
                                placeholder="Password"
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                            />
                            <button 
                                class="btn waves-effect waves-light btn_large #90caf9 blue lighten-3" 
                                type="submit" 
                                name="action"
                                onClick={()=>signIn()}
                            >
                                Log In
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card small_card">
                    <div className="row">
                        <div className="col-md-12">
                            <p className="text-middle">
                                Don't have an account? <Link to="/sign-up">Sign up</Link>     
                            </p>    
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;