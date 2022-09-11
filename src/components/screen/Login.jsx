import React from "react";
import { Link } from "react-router-dom";
import './css/auth.css'

const Login = () =>{

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
                            <input type="email" placeholder="Email"/>
                            <input type="password" placeholder="Password"/>
                            <button class="btn waves-effect waves-light btn_large #90caf9 blue lighten-3" type="submit" name="action">
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