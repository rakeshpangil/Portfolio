import React from 'react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            company: 'Trois Infotech Pvt Ltd',
            role: 'Software Engineer',
            period: 'Mar 2022 - Present',
            location: 'Trivandrum, Kerala',
            description: [
                'Spearheaded Harithamithram app serving 1,00,000+ users across 1,000+ LGIs. Improved performance by 30% through optimization and modular architecture.',
                'Utilized React Native, Redux-Saga, Realm DB, Flutter, SQLite, and BLoC.',
                'Managed multi-environment builds (dev, staging, prod) and reusable component strategy, reducing redundant code by 40%.',
                'Integrated Google Maps with geo-fencing and real-time tracking (25% accuracy gain).',
                'Built POS workflows using Ecstatic SDK (99.9% success) and implemented REST APIs/RabbitMQ for async processing.'
            ]
        },
        {
            company: 'Mananasol India Pvt Ltd',
            role: 'Associate Engineer',
            period: 'Mar 2021 - Mar 2022',
            location: 'Cochin, Kerala',
            description: [
                'Led mobile development of Audit Gear used by 2,000+ businesses; implemented Azure Bot Framework workflows reducing manual registration time by 60%.',
                'Configured PushWoosh notifications with deep linking (Firebase), boosting user engagement by 35%.'
            ]
        },
        {
            company: 'Araigen Innovations',
            role: 'Junior Engineer',
            period: 'Sep 2019 - Mar 2021',
            location: 'Calicut, Kerala',
            description: [
                'Developed e-commerce apps F-Mart and SASCO (10,000+ users) using React Native, Redux Thunk, and UI-Kitten.',
                'Built live fleet tracking using Google Maps API improving delivery ETA accuracy by 25%.',
                'Configured OneSignal notifications and supported React.js dashboard development.'
            ]
        }
    ];

    return (
        <section id="experience" className="experience">
            <div className="container">
                <h2 className="section-title reveal">Work Experience</h2>
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className="timeline-item glass reveal">
                            <div className="timeline-header">
                                <h3>{exp.role}</h3>
                                <span className="company-name">@ {exp.company}</span>
                            </div>
                            <div className="timeline-meta">
                                <span className="period">{exp.period}</span>
                                <span className="location">{exp.location}</span>
                            </div>
                            <ul className="timeline-desc">
                                {exp.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
