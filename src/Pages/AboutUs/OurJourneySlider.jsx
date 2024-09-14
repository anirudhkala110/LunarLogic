import React, { useState } from 'react';
import adidas from '../../Assets/Logos/adidas.png';
import apple from '../../Assets/Logos/apple.jpg';
import flipkart from '../../Assets/Logos/flipkart.png';
import google from '../../Assets/Logos/google.png';
import amazon from '../../Assets/Logos/amazon.png';

// List of milestones
const keyMilestones = [
    { year: 2006, employees: '50+ Employees', img: adidas, partners: [] },
    { year: 2012, employees: '100+ Employees', img: apple, partners: [] },
    { year: 2017, employees: '150+ Employees', img: google, partners: ['GMP Sales Partners', 'GA Resellers'] },
    { year: 2019, employees: '200+ Employees', img: flipkart, partners: [] },
    { year: 2020, employees: '320+ Employees', img: amazon, partners: [] },
];

const OurJourneySlider = () => {
    const [currentIndex, setCurrentIndex] = useState(2); // Start with the third item

    // Handle moving to the next item
    const handleNext = () => {
        if (currentIndex < keyMilestones.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    // Handle moving to the previous item
    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="timeline-slider-container">
            {/* Navigation buttons */}
            <div className="navigation-buttons">
                <button
                    className={`prev ${currentIndex === 0 ? 'disabled' : ''}`}
                    onClick={handlePrev}
                >
                    <i className="bi bi-arrow-left"></i>
                </button>
                <button
                    className={`next ${currentIndex === keyMilestones.length - 1 ? 'disabled' : ''}`}
                    onClick={handleNext}
                >
                    <i className="bi bi-arrow-right"></i>
                </button>
            </div>

            {/* Timeline slider */}
            <div className="timeline-slider">
                {keyMilestones.map((milestone, index) => (
                    <div
                        key={index}
                        className={`timeline-item ${index === currentIndex ? 'active' : 'inactive'}`}
                        style={{
                            transform: `translateX(${(index - currentIndex) * 300}px)`,
                        }}
                    >
                        {index === currentIndex ? (
                            <div className="milestone-content active">
                                <h3>{milestone.year}</h3>
                                <h4>{milestone.employees}</h4>
                                {milestone.partners.length > 0 && (
                                    <div className="partners">
                                        {milestone.partners.map((partner, i) => (
                                            <p key={i}>{partner}</p>
                                        ))}
                                    </div>
                                )}
                                <img
                                    src={milestone.img}
                                    alt={`Partner ${index}`}
                                    className="partner-logo-large"
                                />
                            </div>
                        ) : (
                            <div className="milestone-content inactive">
                                <h3>{milestone.year}</h3>
                                <p>{milestone.employees}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurJourneySlider;
