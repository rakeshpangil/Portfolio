import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title reveal">Get In Touch</h2>
                <div className="contact-wrapper glass reveal">
                    <div className="contact-info full-width">
                        <h3>Let's Connect & Collaborate</h3>
                        <p>
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>
                        <p className="support-message">
                            🤝 <strong>Community Support:</strong> I am passionate about helping fellow developers.
                            If you are facing any coding issues or technical challenges, feel free to reach out.
                            I'm happy to support and debug with you!
                        </p>
                        <div className="contact-details">
                            <div className="detail-item">
                                <span>📧</span>
                                <p>rakeshpangilofl@gmail.com</p>
                            </div>
                            <div className="detail-item">
                                <span>📱</span>
                                <p>+91-9526090926</p>
                            </div>
                            <div className="detail-item">
                                <span>📍</span>
                                <p>Malappuram, Kerala</p>
                            </div>
                        </div>
                        <div className="social-links">
                            <a href="#" className="social-icon">Li</a>
                            <a href="#" className="social-icon">Gh</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
