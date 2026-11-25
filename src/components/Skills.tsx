import React from "react";
import Chip from '@mui/material/Chip';
import iconBa from '../assets/icons/icon_ba.png';
import iconDa from '../assets/icons/icon_da.png';
import iconDev from '../assets/icons/icon_dev.png';
import iconAi from '../assets/icons/icon_ai.png';
import '../assets/styles/Skills.scss';

const skillCards = [
    {
        title: 'Data Analysis & Statistics',
        description: 'I explore and prepare datasets, use statistical methods to identify patterns, and translate findings into clear, useful insights.',
        image: iconDa,
        tags: ['Python', 'SQL', 'Excel', 'Pandas', 'NumPy', 'Data Cleaning', 'Exploratory Data Analysis', 'Descriptive Statistics', 'Hypothesis Testing']
    },
    {
        title: 'Data Science & Machine Learning',
        description: 'I am interested in applying machine learning to real datasets, building predictive models, and evaluating their performance.',
        image: iconAi,
        tags: ['Scikit-learn', 'TensorFlow', 'Regression', 'Classification', 'Decision Trees', 'Random Forest', 'Model Evaluation', 'NLP', 'Computer Vision']
    },
    {
        title: 'Data Visualization & Communication',
        description: 'I use visualizations to make patterns easier to understand and communicate analytical findings clearly.',
        image: iconBa,
        tags: ['Matplotlib', 'Seaborn', 'Tableau', 'Charts & Graphs', 'Visual Storytelling', 'Insight Communication']
    },
    {
        title: 'Data Tools & Workflow',
        description: 'I work with common data tools to query, prepare, analyze, and document datasets across an end-to-end analytical workflow.',
        image: iconDev,
        tags: ['PostgreSQL', 'MySQL', 'Jupyter Notebook', 'Google Colab', 'Data Preparation', 'Feature Engineering', 'Reproducible Analysis']
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
