import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <span class="d-block p-2 bg-dark text-white d-flex justify-content-center font-weight-bolder" id="font">Online Course Technology</span>
            <nav class="navbar navbar-expand-lg navbar-light bg-light navbar navbar-dark bg-dark">
                <a class="navbar-brand font-weight-bold" href="#">Online Course</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link font-weight-bold" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link font-weight-bold" href="#">Categories</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link font-weight-bold" href="#">Pricing</a>
                    </li>                
                </ul>
                     
                </div>
            </nav>
            

        </div>
    );
};

export default Header;