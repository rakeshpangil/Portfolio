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
            <div className="hero-image animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="image-wrapper glass">
                    <img src="https://api.dicebear.com/9.x/avataaars/svg?seed=Rakesh&backgroundColor=b6e3f4" alt="Profile" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
