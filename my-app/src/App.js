import React, { useEffect, useRef } from 'react';
import './App.css';
import image1 from "./project1.png";
import image2 from "./project2.png";
import image3 from "./project3.png";

const MenuItem = ({ target, title, onMenuClick }) => (
  <li className="menu-item" onClick={() => onMenuClick(target)}>{title}</li>
);

const Resume = () => {
  const sectionRefs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
    section4: useRef(null)
  };

  const onMenuClick = (targetId) => {
    const targetSection = sectionRefs[targetId].current;
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // You can also handle active menu item state here if needed
        }
      });
    }, { threshold: 0.1 });

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);


  return (
    <div className="container">
      <div className="menu">
        <ul id="menuItems">
          <MenuItem target="section1" title="Home" onMenuClick={onMenuClick}/>
          <MenuItem target="section2" title="Professional Experience & Recent Projects" onMenuClick={onMenuClick}/>
          <MenuItem target="section3" title="Education" onMenuClick={onMenuClick}/>
          <MenuItem target="section4" title="Skills" onMenuClick={onMenuClick}/>
        </ul>
      </div>
      <div className="content">
        <div id="section1" ref={sectionRefs.section1} className="first-section">
          <h1>Ilias Mirzoiev</h1>
          <p>Email: iliasmirzoiev9@gmail.com | Phone: +380 98 125 36 43</p>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/ilias-mirzoiev-3a516a280/" className="button-link" target="_blank">LinkedIn</a>
                    <a href="https://github.com/C0mpl?tab=repositories" className="button-link" target="_blank">GitHub</a>
                </div>
            </div>
            <div id="section2" ref={sectionRefs.section2} className="section">
                <div className="work-section">
                    <h2>My Previous Projects</h2>
                    <h3>I'm working at Triare as an iOS developer for more than 2 years already and for this time I had a lot of wonderfull projects. There are some of them</h3>
                    <div className="project-grid">
                        <div className="project-item">
                            <img src={image1} alt="Damage Reporting"/>
                            <h3>Damage Reporting</h3>
                            <p>
                                Damage reporting project was dedicated to developing an SDK library for further in-app integration in various hotel and booking services mobile applications. 
                            </p>
                            <p>
                                Sorry, but the SDK was created for the German company who sell it's source code now, so I can't share any link proving details due to NDA.
                            </p>
                        </div>
                        <div className="project-item">
                            <img src={image2} alt="YomiSmile"/>
                            <h3>YomiSmile</h3>
                            <p>
                                The application to show the 3D model of teeth above the patients picture, and show them the final result of work.
                            </p>
                            <p>
                                Sorry, but this application was created for internal use of the American company, so I can't share any additional details due to NDA.
                            </p>
                        </div>
                        <div className="project-item">
                            <img src={image3} alt="HÆSTR"/>
                            <h3>HÆSTR (New version of the Nutrihorse)</h3>
                            <p>
                                Application dedicated to horse owners, major functionality is creating and managing horse profiles. Including the following 
                                functionality: Automatic weight calculator, built-in condition score chart, Info-buttons for assistance, adding all relevant tasks 
                                you want to keep track of distinguishing between general and health related tasks, setting up tailor made notifications.
                            </p>
                            <a href="https://apps.apple.com/us/app/h%C3%A6str/id6447194427" className="button-link" target="_blank">Check it out yourself</a>
                        </div>
                    </div>
                    <p>There are more work wich I can't share with you right now, so stay tuned</p>
                </div>
            </div>
            <div id="section3" ref={sectionRefs.section3} className="section">
                <div className="work-section">
                    <h2>My Education</h2>
                    <div className="project-grid">
                        <div className="project-item">
                            <h3>Cherkasy Middle School #12 (2010-2021)</h3>
                            <p>Basic Middle School Grade</p>
                        </div>
                        <div className="project-item">
                            <h3>CHSTU</h3>
                            <p>Software Engineering</p>
                        </div>
                        <div className="project-item">
                            <h3>Triare Education</h3>
                            <p>iOS Development</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="section4" ref={sectionRefs.section4} className="section">
                <div className="skills-section">
                    <h2>My Skills</h2>
                    <ul className="skills-list">
                        <li className="skill-item">Swift</li>
                        <li className="skill-item">SwiftUI</li>
                        <li className="skill-item">Xcode</li>
                        <li className="skill-item">CI-CD</li>
                        <li className="skill-item">Core Data</li>
                        <li className="skill-item">App Store</li>
                        <li className="skill-item">SDKs</li>
                        <li className="skill-item">Git</li>
                        <li className="skill-item">GitFlow</li>
                        <li className="skill-item">Multithreading</li>
                        <li className="skill-item">UI-Responsiveness</li>
                        <li className="skill-item">Core Animation</li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
  );
};

export default Resume;

