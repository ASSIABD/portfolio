import { Container, Row, Col } from "react-bootstrap";
import linkedin from "../assets/img/linkedin-64.png";
import github from "../assets/img/github-9-64.png";
import gmail from "../assets/img/mail-64.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} className="text-center">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/assia-bendaou" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn" style={{width: '20px', height: '20px', objectFit: 'contain'}} /></a>
              <a href="https://github.com/ASSIABD" target="_blank" rel="noopener noreferrer"><img src={github} alt="GitHub" style={{width: '20px', height: '20px', objectFit: 'contain'}} /></a>
              <a href="mailto:bendaouassia@gmail.com" target="_blank" rel="noopener noreferrer"><img src={gmail} alt="Email" style={{width: '20px', height: '20px', objectFit: 'contain'}} /></a>
            </div>
            <p>Thank you for attention</p>
                      </Col>
        </Row>
      </Container>
    </footer>
  )
}
