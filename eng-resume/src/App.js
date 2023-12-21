import React from 'react';
import './App.css';

const Resume = () => {

  const sectionTitleStyle = {
    fontWeight: 'bold',
    fontSize: '18px',
    color: '#333',
    borderBottom: '2px solid #4da6ff',
    marginTop: '20px',
    paddingBottom: '5px'
  };

  const socialLinks = {
    linkedin: 'https://www.linkedin.com/in/ilias-mirzoiev-3a516a280/',
    github: 'https://github.com/C0mpl?tab=repositories'
  };

  const headerH1Style = {
    margin: '0'
  };

  const jobTitle = {
    fontWeight: 'bold',
    color: '#333'
  };

  const ulStyle = {
    listStyle: 'none',
    padding: 0
  };

  const liStyle = {
    paddingLeft: '20px',
    marginBottom: '10px'
  };
  
  const styles = {
    body: {
      fontFamily: "'Arial', sans-serif",
      lineHeight: 1.6,
      margin: 0,
      padding: 0,
      backgroundColor: '#e6f2ff',
      color: '#333'
    },
    container: {
      width: '80%',
      margin: 'auto',
      overflow: 'hidden',
      padding: '20px',
      background: '#fff',
      border: '1px solid #b3d1ff',
      borderRadius: '10px',
      boxShadow: '2px 2px 5px rgba(0,0,0,0.2)'
    },
    header: {
      color: '#fff',
      background: '#4da6ff', 
      padding: '10px',
      textAlign: 'center',
      marginBottom: '20px'
  }
  };

  return (
    <div style={styles.container}>
      <header style={{...styles.header, ...styles.colorWhite}}>
        <h1 style={headerH1Style}>Ilias Mirzoiev</h1>
        <p>Email: iliasmirzoiev9@gmail.com | Phone: +380 98 125 36 43</p>
        <div className="social-links">
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </header>

      <section>
            <div style={sectionTitleStyle}>About Me</div>
            <p>
              Meticulous iOS developer with 2+ years of experience and passion for the developing process. Reliable and self motivated
              personality with constant desire to grow and develop.  I worked with applications for realty, social and education. 
              I am a fast learner, eager to learn and share knowledge among co-workers. I work on each project with dedication and 
              creativity.
            </p>
        </section>

    <section>
            <div style={sectionTitleStyle}>Professional Experience</div>
            <div>
                <p style={jobTitle}>iOS Developer</p>
                <p>Triare, Cherkasy | November 2021 - Present</p>
                <ul style = {ulStyle}>
                    <li style={liStyle}>Development and support of iOS applications</li>
                </ul>
            </div>
        </section>

        <section>
            <div style={sectionTitleStyle}>Education</div>
            <p>Cherkasy State Technological University | Software Engineering | 2021 - Present</p>
        </section>

        <section>
            <div style={sectionTitleStyle}>Skills</div>
            <ul style = {ulStyle}>
                <li style={liStyle}>CI-CD</li>
                <li style={liStyle}>Core Data</li>
                <li style={liStyle}>OOP</li>
                <li style={liStyle}>App Store</li>
                <li style={liStyle}>SDKs</li>
                <li style={liStyle}>Git</li>
                <li style={liStyle}>GitFlow</li>
                <li style={liStyle}>Multithreading</li>
                <li style={liStyle}>UI-Responsivnes</li>
                <li style={liStyle}>Core Animation</li>
                <li style={liStyle}>Agile Environment</li>
                <li style={liStyle}>CocoaPods</li>
                <li style={liStyle}>SPM</li>
                <li style={liStyle}>Firebase</li>
            </ul>
        </section>

        <section>
            <div style={sectionTitleStyle}>Languages</div>
            <p>Ukrainian - Native</p>
            <p>English - Advanced</p>
        </section>
    </div>
  );
};

export default Resume;

