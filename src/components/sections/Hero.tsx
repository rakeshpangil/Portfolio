import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <h3 className="animate-fade-in" style={{ animationDelay: '0.1s' }}>Hello, I'm</h3>
                <h1 className="animate-fade-in gradient-text" style={{ animationDelay: '0.2s' }}>Rakesh Pangil</h1>
                <h2 className="animate-fade-in" style={{ animationDelay: '0.3s' }}>Mobile Application Developer</h2>
                <p className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    I build exceptional digital experiences that are fast, accessible, beautiful, and responsive.
                </p>
                <div className="hero-buttons animate-fade-in" style={{ animationDelay: '0.5s' }}>
                    <a href="#projects" className="btn btn-primary">View My Work</a>
                    <a href="#contact" className="btn btn-secondary">Contact Me</a>
                </div>
            </div>
            <div className="devices-container animate-fade-in" style={{ animationDelay: '0.6s' }}>
                {/* Laptop */}
                <div className="laptop-wrapper floating" style={{ animationDelay: '0s' }}>
                    <div className="laptop-screen">
                        <div className="app-content laptop-view">
                            <div className="app-header">
                                <span className="logo">RP</span>
                                <nav>
                                    <span className="active">Home</span>
                                    <span>About</span>
                                    <span>Work</span>
                                    <span>Contact</span>
                                </nav>
                            </div>
                            <div className="app-body">
                                <div className="text-content">
                                    <h1>Building<br />Digital<br />Products</h1>
                                    <p>Mobile & Web Development</p>
                                    <div className="app-btn">View Projects</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="laptop-base"></div>
                </div>

                {/* Mobile */}
                <div className="phone-wrapper floating" style={{ animationDelay: '0.5s' }}>
                    <div className="phone-frame">
                        <div className="phone-screen">
                            <div className="mobile-app-content">
                                <div className="mobile-avatar">
                                    <img src="https://api.dicebear.com/9.x/avataaars/svg?seed=Rakesh&backgroundColor=b6e3f4" alt="Profile" />
                                </div>
                                <div className="mobile-text">
                                    <h3>Hello I'm</h3>
                                    <h1>Rakesh</h1>
                                    <p>Mobile App<br />Developer</p>
                                    {/* <div className="mobile-btn">Hire Me</div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
