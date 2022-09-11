import React from "react";
import './css/home.css'

const Home = () =>{

    return(
        <div className="home">
            <div className="card home_card">
                <div className="profile">
                    <p>Abdullah Azmain</p>
                </div>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1662675120239-3c3192d72334?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div className="content">
                    <i class="Small material-icons">favorite</i>
                    <h6>This is amazing</h6>
                    <input type="text" placeholder="Add a comment.."/>
                </div>
            </div>
            <div className="card home_card">
                <div className="profile">
                    <p>Abdullah Azmain</p>
                </div>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1662668862763-dc613ee191ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div className="content">
                    <i class="Small material-icons">favorite</i>
                    <h6>This is amazing</h6>
                    <input type="text" placeholder="Add a comment.."/>
                </div>
            </div>
            <div className="card home_card">
                <div className="profile">
                    <p>Abdullah Azmain</p>
                </div>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1662585082632-63401fd5c235?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div className="content">
                    <i class="Small material-icons">favorite</i>
                    <h6>This is amazing</h6>
                    <input type="text" placeholder="Add a comment.."/>
                </div>
            </div>

        </div>
    )
}

export default Home;