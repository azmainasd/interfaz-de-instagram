import React from "react";
import { Link } from "react-router-dom";
import './css/post.css'

const CreatePost = () =>{

    return(
        <>
            <div>
                <div className="card input-card">
                    <div className="row">
                        <div className="col-md-12">
                            <input type="text" placeholder="title" />
                            <input type="text" placeholder="body" />
                        </div>
                        <div className="file-field input-field">
                            <div className="btn">
                                <span>image</span>
                                <input type="file" />
                            </div>
                            <div className="file-path-wrapper">
                                <input className="file-path validate" type="text" />
                            </div>
                        </div>
                        <button class="btn waves-effect waves-light btn_large #90caf9 blue darken-3" type="submit" name="action">
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreatePost;