import { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import projImg1 from "../assets/img/project1.jpg";
import projImg2 from "../assets/img/project2.png";
import projImg3 from "../assets/img/project3.jpg";
import certImg1 from "../assets/img/coursera.png";
import certImg2 from "../assets/img/me2.png";
import certImg3 from "../assets/img/oracle1.png";
import certImg4 from "../assets/img/oracle2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const PortfolioShowcase = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const projects = [
    {
      title: "Speak Your Hands",
      description: "Real-time gesture recognition desktop app using CNN (MobileNetV2) and Docker containerization.",
      imgUrl: projImg1,
      githubUrl: "https://github.com/AssiaBendaou/Speak-Your-Hands",
      detailsUrl: "https://example.com/details1"
    },
    {
      title: "Public Transport Optimization",
      description: "Passenger count prediction using LightGBM on 57,000+ observations with advanced feature engineering.",
      imgUrl: projImg3,
      githubUrl: "https://github.com/AssiaBendaou/Transport-Optimization",
      detailsUrl: "https://example.com/details2"
    },
    {
      title: "Recipe Web Platform",
      description: "Full-stack web platform with secure JWT authentication and responsive UI design.",
      imgUrl: projImg2,
      githubUrl: "https://github.com/AssiaBendaou/Recipe-Platform",
      detailsUrl: "https://example.com/details3"
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
                              <a href={project.detailsUrl} className="btn-details">Details</a>
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
    </section>
  )
}
