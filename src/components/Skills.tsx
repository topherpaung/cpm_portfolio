import React from "react";
import Chip from '@mui/material/Chip';
import iconBa from '../assets/icons/icon_ba.png';
import iconDa from '../assets/icons/icon_da.png';
import iconDev from '../assets/icons/icon_dev.png';
import iconAi from '../assets/icons/icon_ai.png';
import '../assets/styles/Skills.scss';

const skillCards = [
    {
        title: 'IT Business Analysis & Project Management',
        description: 'I bridge business needs and technology by analyzing requirements, managing project deliverables, documenting business processes, coordinating stakeholders, and ensuring successful software implementation throughout the Software Development Life Cycle (SDLC).',
        image: iconBa,
        tags: ['Requirement Gathering', 'Stakeholder Management', 'Agile / Scrum', 'SDLC', 'Business Process Analysis', 'Risk & Cost Analysis', 'SIT / UAT', 'Documentation (BRD, FSD)', 'UI/UX Design']
    },
    {
        title: 'Data Analytics & Business Intelligence Analysis',
        description: 'I transform raw data into actionable business insights through statistical analysis, data visualization, forecasting, and dashboard development to support data-driven decision making.',
        image: iconDa,
        tags: ['Python', 'SQL', 'R', 'Excel', 'Pandas', 'NumPy', 'Tableau', 'Apache Spark', 'Statistics', 'Data Visualization', 'Forecasting']
    },
    {
        title: 'Software Development & Engineering',
        description: 'I develop modern web applications with responsive interfaces, scalable backend systems, and database integration.',
        image: iconDev,
        tags: ['Laravel', 'React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SCSS', 'Node.js', 'MySQL', 'PostgreSQL', 'GitHub', 'Docker', 'AWS']
    },
    {
        title: 'Artificial Intelligence & Machine Learning',
        description: 'I build intelligent applications by applying machine learning and deep learning techniques for computer vision, audio classification, and predictive analytics to solve real-world problems.',
        image: iconAi,
        tags: ['Python', 'TensorFlow', 'Scikit-learn', 'CNN', 'LSTM', 'Computer Vision', 'OpenCV', 'Librosa', 'MFCC', 'Jupyter Notebook', 'Google Colab', 'Machine Learning', 'Deep Learning']
    }
];

function Skills() {
    return (
    <div className="container" id="skills">
        <div className="skills-container">
            <h1>Skills</h1>
            <div className="skills-grid">
                {skillCards.map((skill, index) => {
                    const borderClass = index === 0 ? 'card-red' : index === 1 ? 'card-yellow' : index === 2 ? 'card-blue' : 'card-green';

                    return (
                    <div className={`skill ${borderClass}`} key={index}>
                        <img src={skill.image} alt={skill.title} className="skill-icon" />
                        <h3>{skill.title}</h3>
                        <p>{skill.description}</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {skill.tags.map((tag, tagIndex) => (
                                <Chip key={tagIndex} className='chip' label={tag} />
                            ))}
                        </div>
                    </div>
                    );
                })}
            </div>
        </div>
    </div>
    );
}

export default Skills;