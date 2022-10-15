import React from "react";
import { useState } from "react";
import { Link, useNavigate  } from "react-router-dom";
import M from "materialize-css";
import './css/auth.css'

const SignUp = () =>{
    const navigate  = useNavigate();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const signUP = () => {
        if (!name || !email || !password){
            M.toast({html: 'Please add all the fields value', classes: '#e57373 red darken-1'})
            return 
        }
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            M.toast({html: 'Invalid email', classes: '#e57373 red darken-1'})
            return 
        }
        if (password.length < 7){
            M.toast({html: 'Password  must be at least 6 character', classes: '#e57373 red darken-1'})
            return 
        }
        fetch('/sign-up', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                name,
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
                navigate('/login')
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
                <div className="card sign_up">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="head">
                                <img src="images\logo\logo.png" alt="Logo" />
                                <p>
                                    Sign up to see photos and videos from your friends.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-12 input-field">
                            <input 
                                type="text" 
                                placeholder="Name"
                                value={name}
                                onChange={(e)=>setName(e.target.value)}
                            />
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
                                className="btn waves-effect waves-light btn_large #90caf9 blue lighten-3" 
                                type="submit" 
                                name="action"
                                onClick={()=>signUP()}
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card small_card">
                    <div className="row">
                        <div className="col-md-12">
                            <p className="text-middle">
                                Have an account? <Link to="/login">Log in</Link>     
                            </p>    
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp;