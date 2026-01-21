import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Harithamithram',
            description: 'A React Native app serving 100,000+ users for improved waste management.',
            details: [
                'Implemented offline functionality with Realm DB.',
                'Integrated Google Maps for Geo-fencing and real-time tracking.',
                'Optimized performance for large-scale user base.'
            ],
            tags: ['React Native', 'Redux Saga', 'Realm DB', 'Google Maps'],
        },
        {
            title: 'F-Mart',
            description: 'Delivery Management Mobile Application, UAE',
            details: [
                'User interface design and adapting npm services to meet business needs.',
                'OneSignal integration for notification, React navigation 4.',
                'Integrating REST APIs with GraphQL.',
                'Integrating Redux for application state management.'
            ],
            tags: ['React Native', 'GraphQL', 'Redux', 'OneSignal'],
        },
        {
            title: 'Orduz',
            description: 'Delivery Management Application, India',
            details: [
                'Integrating REST APIs to meet business needs.',
                'Integrating Redux to application state management.',
                'Google map direction with Live Location tracking.',
                'Cart management implementation.'
            ],
            tags: ['React Native', 'Redux', 'Google Maps', 'REST API'],
        },
        {
            title: 'SASCO',
            description: 'Fuel Delivery Management Application, Saudi Arabia',
            details: [
                'Integrating REST APIs with GraphQL to meet business needs.',
                'Integrating Redux to application state management.',
                'Google map direction with Live Location tracking.'
            ],
            tags: ['React Native', 'GraphQL', 'Redux', 'Google Maps'],
        },
        {
            title: 'Audit Gear',
            description: 'Company registration and account management tool.',
            details: [
                'User interface design, State management by Redux.',
                'Microsoft Azure Bot chat framework integration.',
                'Company registration through bot chat.',
                'File upload, Download, Camera, Gallery features.'
            ],
            tags: ['Flutter', 'Azure Bot', 'Redux', 'Mobile'],
        },
        {
            title: 'CFW',
            description: 'Child and Family Welfare Application.',
            details: [
                'User interface design, State management by Redux.',
                'Integrating REST APIs.',
                'Deep Linking with Firebase Dynamic link.'
            ],
            tags: ['React Native', 'Redux', 'Firebase', 'REST API'],
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title reveal">Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card glass reveal" style={{ transitionDelay: `${index * 100}ms` }}>
                            <div className="project-image">
                                <h3>{project.title}</h3>
                            </div>
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                {project.details && (
                                    <ul className="project-details">
                                        {project.details.map((detail, i) => (
                                            <li key={i}>{detail}</li>
                                        ))}
                                    </ul>
                                )}
                                <div className="project-tags">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="tag">{tag}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href="#" className="btn-sm">View Demo</a>
                                    <a href="#" className="btn-sm outline">Source Code</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
