import { Col, Button, Modal } from "react-bootstrap";
import { useState } from "react";

export const ProjectCard = ({ title, description, imgUrl, githubUrl, id }) => {
  const [showModal, setShowModal] = useState(false);
  
  // Debug: Log the image URL
  console.log('ProjectCard - Image URL:', imgUrl);
  console.log('ProjectCard - Title:', title);

  const handleDetailsClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Col size={12} sm={6} md={4}>
        <div className="proj-imgbx">
          <img 
            src={imgUrl} 
            alt={title} 
            style={{ 
              width: '100%', 
              aspectRatio: '16/9', 
              objectFit: 'cover', 
              borderRadius: '15px',
              position: 'relative',
              zIndex: 1,
              display: 'block'
            }}
            onLoad={() => console.log(`Image loaded successfully: ${title}`)}
            onError={(e) => {
              console.error(`Image failed to load: ${title}`, e);
              e.target.style.display = 'none';
            }}
          />
          <div className="proj-txtx" style={{ opacity: 1, position: 'relative', top: 'auto', left: 'auto', transform: 'none', marginTop: '15px' }}>
            <h4>{title}</h4>
            <span>{description}</span>
            <div className="project-buttons" style={{ marginTop: '15px' }}>
              <Button 
                variant="primary" 
                size="sm" 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ marginRight: '10px' }}
              >
                GitHub ↗
              </Button>
              <Button 
                variant="outline-primary" 
                size="sm" 
                onClick={handleDetailsClick}
              >
                Details
              </Button>
            </div>
          </div>
        </div>
      </Col>
      
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{description}</p>
          <p><strong>Technologies Used:</strong> This project demonstrates advanced skills in machine learning, web development, and modern software engineering practices.</p>
          <p><strong>Key Features:</strong> Innovative solution with real-world applications, showcasing technical expertise and problem-solving abilities.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" href={githubUrl} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
