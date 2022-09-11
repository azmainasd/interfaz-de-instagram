import React from "react";
import { Link } from "react-router-dom";
import './css/auth.css'

const SignUp = () =>{

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
                            <input type="text" placeholder="Name"/>
                            <input type="email" placeholder="Email"/>
                            <input type="password" placeholder="Password"/>
                            <button class="btn waves-effect waves-light btn_large #90caf9 blue lighten-3" type="submit" name="action">
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