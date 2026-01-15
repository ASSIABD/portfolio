import { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import projImg1 from "../assets/img/project1.jpg";
import projImg2 from "../assets/img/project2.png";
import projImg3 from "../assets/img/project3.jpg";
import bg1 from "../assets/img/banner-bg.png";
import certImg1 from "../assets/img/coursera.png";
import certImg2 from "../assets/img/me2.png";
import certImg3 from "../assets/img/oracle1.png";
import certImg4 from "../assets/img/oracle2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const PortfolioShowcase = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Speak Your Hands",
      description: "Real-time gesture recognition desktop app using CNN (MobileNetV2) and Docker containerization.",
      imgUrl: projImg1,
      githubUrl: "https://github.com/AssiaBendaou/Speak-Your-Hands",
      content: {
        date: "March 2024",
        tech: ["Python", "JavaFX", "Docker", "TensorFlow"],
        dataset: "Real-time gesture recognition (A-Z) using Convolutional Neural Networks with MobileNetV2 architecture.",
        impact: "Advanced computer vision solution enabling real-time sign language translation, demonstrating expertise in deep learning, Docker containerization, and desktop application development."
      }
    },
    {
      title: "Public Transport Optimization",
      description: "Passenger count prediction using LightGBM on 57,000+ observations with advanced feature engineering.",
      imgUrl: projImg3,
      githubUrl: "https://github.com/AssiaBendaou/Transport-Optimization",
      content: {
        date: "October 2025",
        tech: ["Python", "Random Forest", "XGBoost", "LightGBM"],
        dataset: "Passenger demand prediction using 57,916 observations with Exploratory Data Analysis and advanced feature engineering techniques.",
        impact: "Sophisticated machine learning solution for urban transportation optimization, demonstrating advanced data science skills and real-world problem-solving capabilities."
      }
    },
    {
      title: "Recipe Web Platform",
      description: "Full-stack web platform with secure JWT authentication and responsive UI design.",
      imgUrl: projImg2,
      githubUrl: "https://github.com/AssiaBendaou/Recipe-Platform",
      content: {
        date: "May 2024",
        tech: ["Laravel", "PHP", "MySQL", "JWT"],
        dataset: "Full-stack web application with secure JSON Web Token authentication system and RESTful API architecture.",
        impact: "Comprehensive web development project showcasing backend expertise, secure authentication protocols, and modern full-stack development practices."
      }
    },
  ];

  const certificates = [
    {
      title: "Supervised Machine Learning (Coursera)",
      issuer: "Coursera - DeepLearning.AI",
      imgUrl: certImg1,
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/T00ICIH9M32V"
    },
    {
      title: "Oracle Cloud Infrastructure Data Science Certified Professional",
      issuer: "Oracle - Cloud Infrastructure",
      imgUrl: certImg3,
      verifyUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=9F9B2414B28681CD431A057AEF9E42FCDF46EC75FB78C17E15CA1170E7E5B7D2"
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle - Cloud Infrastructure",
      imgUrl: certImg4,
      verifyUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=6B716A03EC680478AC5731E4253539264093A850BE90D8A1421BE963A0C17BF1"
    },
  ];

  const techStack = [
    {
      category: "AI & Machine Learning",
      skills: ["Machine Learning", "Deep Learning", "CNN", "Computer Vision", "NLP", "TensorFlow", "PyTorch"]
    },
    {
      category: "Data & Analytics",
      skills: ["Hadoop", "MapReduce", "Power BI", "SQL", "MongoDB", "pandas", "scikit-learn"]
    },
    {
      category: "Programming Languages",
      skills: ["Python", "Java", "C", "JavaScript", "PHP", "R", "MATLAB"]
    },
    {
      category: "Tools & Frameworks",
      skills: ["Git", "Docker", "Jupyter", "VS Code", "Laravel", "React", "Node.js"]
    }
  ];

  const tabs = [
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'techstack', label: 'Tech Stack' }
  ];

  return (
    <section className="portfolio-showcase" id="portfolio">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Portfolio Showcase</h2>
                <p>Explore my projects, certifications, and technical expertise</p>
                
                {/* Tabbed Navigation */}
                <div className="tab-navigation">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className={`tab-content ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                  {activeTab === 'projects' && (
                    <div className="projects-grid">
                      {projects.map((project, index) => (
                        <div key={index} className="showcase-card">
                          <div className="card-image">
                            <img src={project.imgUrl} alt={project.title} />
                          </div>
                          <div className="card-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="card-actions">
                              <a href={project.githubUrl} className="btn-demo" target="_blank" rel="noopener noreferrer">
                                GitHub
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                  <polyline points="15,3 21,3 21,9"></polyline>
                                  <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                              </a>
                              <button onClick={() => setSelectedProject(project)} className="btn-details">Details</button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'certificates' && (
                    <div className="certificates-grid">
                      {certificates.map((cert, index) => (
                        <div key={index} className="showcase-card certificate-card">
                          <div className="card-image">
                            <img src={cert.imgUrl} alt={cert.title} />
                          </div>
                          <div className="card-content">
                            <h3>{cert.title}</h3>
                            <p className="issuer">{cert.issuer}</p>
                            {cert.verifyUrl && (
                              <div className="card-actions">
                                <a href={cert.verifyUrl} className="btn-details" target="_blank" rel="noopener noreferrer">
                                  Verify Certificate
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15,3 21,3 21,9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                  </svg>
                                </a>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'techstack' && (
                    <div className="tech-stack-grid">
                      {techStack.map((category, index) => (
                        <div key={index} className="tech-category">
                          <h3>{category.category}</h3>
                          <div className="skills-grid">
                            {category.skills.map((skill, skillIndex) => (
                              <div key={skillIndex} className="skill-pill">
                                {skill}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      
      {/* Background Glow Effects */}
      <div className="glow-blob glow-1"></div>
      <div className="glow-blob glow-2"></div>
      
      {/* Mission Report Modal */}
      {selectedProject && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(10, 10, 30, 0.9)',
            backdropFilter: 'blur(20px)',
            backgroundImage: `url(${bg1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div 
            style={{
              background: 'rgba(15, 15, 30, 0.7)',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '40px',
              padding: '50px',
              maxWidth: '1100px',
              width: '90%',
              boxShadow: '0 0 30px rgba(63, 81, 181, 0.2)',
              cursor: 'default',
              position: 'relative',
              margin: '0 auto'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ paddingTop: '120px' }}>
              {/* Two Column Layout */}
              <div style={{ display: 'flex', gap: '50px', alignItems: 'flex-start' }}>
                {/* Left Column - Project Image */}
                <div style={{ flex: '0 0 40%' }}>
                  <div style={{
                    position: 'relative',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    boxShadow: '0 0 20px rgba(63, 81, 181, 0.2)',
                    border: '2px solid rgba(63, 81, 181, 0.3)'
                  }}>
                    <img 
                      src={selectedProject.imgUrl} 
                      alt={selectedProject.title}
                      style={{
                        width: '100%',
                        height: '200px',
                        objectFit: 'cover',
                        display: 'block'
                      }}
                    />
                  </div>
                </div>
                
                {/* Right Column - Mission Log */}
                <div style={{ flex: '1', color: '#fff' }}>
                  <h2 style={{ 
                    fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, sans-serif',
                    color: '#ececec', 
                    fontSize: '2.6rem', 
                    fontWeight: '700',
                    marginBottom: '20px',
                    lineHeight: '1.2',
                    letterSpacing: '0.5px'
                  }}>
                    {selectedProject.title}
                  </h2>
                  <p style={{ 
                    fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, sans-serif',
                    color: '#b0b0b0', 
                    fontSize: '1rem', 
                    marginBottom: '35px',
                    fontStyle: 'italic'
                  }}>
                    {selectedProject.content.date}
                  </p>
                  
                  <div style={{ marginBottom: '30px' }}>
                    <h3 style={{ 
                      fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, sans-serif',
                      color: '#b0b0b0', 
                      fontSize: '1rem', 
                      fontWeight: 'bold',
                      marginBottom: '15px',
                      letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                      textShadow: '0 0 5px rgba(63, 81, 181, 0.3)'
                    }}>
                      TECH STACK
                    </h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '30px' }}>
                      {selectedProject.content.tech.map((tech, index) => (
                        <span 
                          key={index} 
                          style={{
                            background: 'rgba(63, 81, 181, 0.1)',
                            border: '1px solid rgba(63, 81, 181, 0.3)',
                            color: '#ececec',
                            padding: '6px 14px',
                            borderRadius: '8px',
                            fontSize: '0.85rem',
                            fontWeight: '500',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            display: 'inline-block'
                          }}
                          onMouseOver={(e) => {
                            e.target.style.background = 'rgba(63, 81, 181, 0.2)';
                            e.target.style.borderColor = 'rgba(63, 81, 181, 0.5)';
                          }}
                          onMouseOut={(e) => {
                            e.target.style.background = 'rgba(63, 81, 181, 0.1)';
                            e.target.style.borderColor = 'rgba(63, 81, 181, 0.3)';
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div style={{ marginBottom: '30px' }}>
                    <h3 style={{ 
                      fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, sans-serif',
                      color: '#b0b0b0', 
                      fontSize: '1rem', 
                      fontWeight: 'bold',
                      marginBottom: '15px',
                      letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                      textShadow: '0 0 5px rgba(63, 81, 181, 0.3)'
                    }}>
                      DATASET
                    </h3>
                    <p style={{ 
                      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                      color: '#d1d1d1', 
                      fontSize: '1rem', 
                      lineHeight: '1.6'
                    }}>
                      {selectedProject.content.dataset}
                    </p>
                  </div>
                  
                  <div style={{ marginBottom: '40px' }}>
                    <h3 style={{ 
                      fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, sans-serif',
                      color: '#b0b0b0', 
                      fontSize: '1rem', 
                      fontWeight: 'bold',
                      marginBottom: '15px',
                      letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                      fontStyle: 'italic',
                      textShadow: '0 0 5px rgba(63, 81, 181, 0.3)'
                    }}>
                      IMPACT
                    </h3>
                    <p style={{ 
                      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                      color: '#d1d1d1', 
                      fontSize: '1rem', 
                      lineHeight: '1.6'
                    }}>
                      {selectedProject.content.impact}
                    </p>
                  </div>
                </div>
              </div>
              
              <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <button 
                  onClick={() => setSelectedProject(null)}
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(63, 81, 181, 0.4)',
                    color: '#b0b0b0',
                    padding: '12px 30px',
                    borderRadius: '50px',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, sans-serif'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.borderColor = 'rgba(63, 81, 181, 0.8)';
                    e.target.style.color = '#ececec';
                    e.target.style.boxShadow = '0 0 15px rgba(63, 81, 181, 0.3)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.borderColor = 'rgba(63, 81, 181, 0.4)';
                    e.target.style.color = '#b0b0b0';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  RETURN TO GALAXY
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
