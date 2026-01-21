import React from 'react';
import './About.css';

const About = () => {
    const skills = [
        'Flutter', 'React Native', 'React JS', 'Dart', 'JavaScript',
        'Redux Saga', 'BLoC', 'Firebase', 'Native Android/iOS', 'GraphQL',
        'REST APIs', 'Google Maps API', 'Razorpay', 'Git'
    ];

    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title reveal">About Me</h2>
                <div className="about-content glass reveal">
                    <div className="about-text">
                        <p>
                            I am a Mobile Application Developer with over 5 years of experience specializing in React Native and Flutter.
                            I have built and scaled high-performance cross-platform applications used by thousands of users across government, enterprise, and e-commerce domains.
                        </p>
                        <p>
                            My expertise includes application architecture, performance optimization, API integration, real-time data handling, and end-to-end app deployment.
                            I have hands-on experience with modern state management, payment gateways, mapping solutions, and CI/CD practices, and I consistently focus on building reliable, maintainable, and user-centric mobile solutions.
                            My expertise includes delivering apps serving over 100,000 users, implementing complex offline-first
                            architectures with Realm/SQLite, and integrating real-time features like Geo-fencing and payment gateways.
                        </p>
                    </div>
                    <div className="skills-container">
                        <h3>Technical Skills</h3>
                        <div className="skills-grid">
                            {skills.map((skill, index) => (
                                <div key={index} className="skill-tag">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
