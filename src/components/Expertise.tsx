import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "SQL", 
    "HTML/CSS",
    "R"
];

const labelsSecond = [
    "Visual Studio",
    "PyCharm",
    "Git"
];

const labelsThird = [
    "pandas",
    "NumPy",
    "Matplotlib",
    "Scikit-learn",
    "TensorFlow",
    "PyTorch"
];

function Expertise() {
    return (
    <div className="container" id="skills">
        <div className="skills-container">
            <h1>Technical Skills</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Languages</h3>
                    <p>I have experience with programming languages for data science and web development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Developer Tools</h3>
                    <p>I use modern development tools for efficient coding and version control.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Machine Learning</h3>
                    <p>I work with various ML libraries and frameworks for data analysis and model building.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;