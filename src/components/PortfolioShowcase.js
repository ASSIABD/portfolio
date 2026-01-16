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
      title: "Speak Your Hands – Real-Time ASL Recognition",
      description: "Real-Time ASL Recognition Desktop Application",
      imgUrl: projImg1,
      githubUrl: "https://github.com/AssiaBendaou/Speak-Your-Hands",
      content: {
        date: "May 2024",
        tech: ["Java", "JavaFX", "Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Pandas", "Scikit-learn", "Matplotlib", "CSS"],
        description: ["Speak Your Hands is a desktop application developed at ENSIASD to translate American Sign Language (ASL) gestures into the English alphabet in real time, empowering the deaf and mute community. The system recognizes 29 gestures using a MobileNetV2 model integrated with a JavaFX interface, achieving high accuracy without GPU requirements. It also features an interactive quiz to help users practice and improve ASL fluency."]
      }
    },
    {
      title: "Cook & Share – Recipe Sharing Platform",
      description: "Laravel-Based Recipe Sharing Web Application",
      imgUrl: projImg2,
      githubUrl: "https://github.com/AssiaBendaou/Recipe-Platform",
      content: {
        date: "May 2024",
        tech: ["Laravel 10", "MySQL", "HTML5", "CSS3", "JavaScript", "Bootstrap 5", "jQuery", "Eloquent ORM", "Laravel Authentication"],
        description: ["Cook & Share is a Laravel-based web platform connecting food lovers to create, share, and explore recipes. Users can upload images, search and filter by ingredients or difficulty, rate and review recipes, and save favorites. The responsive interface ensures seamless interaction across devices. A future AI assistant will suggest recipes and guide users with step-by-step cooking instructions."]
      }
    },
    {
      title: "Public Transport Optimization with Machine Learning",
      description: "Passenger Demand Prediction & Resource Optimization",
      imgUrl: projImg3,
      githubUrl: "https://github.com/AssiaBendaou/Transport-Optimization",
      content: {
        date: "November 2025",
        tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "LightGBM", "XGBoost", "Matplotlib", "Seaborn"],
        description: ["This project addresses inefficiencies in public transport by predicting passenger demand to reduce overcrowding and underutilization. Using a dataset from Transports Publics Genevois (57,916 observations), we performed cleaning, feature engineering, and exploratory analysis before testing multiple models. An optimized LightGBM model was deployed, with a prototype simulating real-time predictions to support data-driven planning."]
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
          className="mission-report-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div className="details-card" onClick={(e) => e.stopPropagation()}>
            <div className="details-card-grid">
              {/* Left Column - Project Image */}
              <div className="details-image-container">
                <div className="details-image-wrapper">
                  <img 
                    src={selectedProject.imgUrl} 
                    alt={selectedProject.title}
                    className="details-image"
                  />
                </div>
              </div>
              
              {/* Right Column - Text Content */}
              <div className="details-content">
                <div className="details-content-inner">
                  <div className="details-header">
                    <h2 className="details-title">
                      {selectedProject.title}
                    </h2>
                    <p className="details-date">
                      {selectedProject.content.date}
                    </p>
                  </div>
                  
                  <div className="details-section">
                    <h3 className="details-section-title">
                      TECH STACK
                    </h3>
                    <div className="tech-tags">
                      {selectedProject.content.tech.map((tech, index) => (
                        <span key={index} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="details-section">
                    <h3 className="details-section-title">
                      PROJECT DETAILS
                    </h3>
                    <p className="details-description">
                      {selectedProject.content.description[0]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Action Button */}
            <div className="details-action">
              <button 
                onClick={() => setSelectedProject(null)}
                className="details-button"
              >
                RETURN TO GALAXY
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
