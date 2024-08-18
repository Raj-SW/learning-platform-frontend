import React from 'react';
import TutoringInfoCards from './TutoringInfoCards';
import { Container, Row, Col } from 'react-bootstrap';
import relaxLottie from '../../assets/TutoringInfoCardsAssets/business-salesman.json'
import certificateLottie from '../../assets/TutoringInfoCardsAssets/certificate-paper.json'
import contractLottie from '../../assets/TutoringInfoCardsAssets/singing-contract.json'
import creativeThinkingLottie from '../../assets/TutoringInfoCardsAssets/creativeThinking.json'
const TutoringServicesSection = () => {
  return (
    <Container fluid className="tutoring-info-section-wrapper d-flex flex-column align-items-center py-5">
      <Row className="tutoring-header text-center mb-4">
        <Col>
          <p>How do we operate?</p>
          <h1>How does our tutoring differ?</h1>
        </Col>
      </Row>
      <Row className="tutoring-cards-container d-flex justify-content-center">
        <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center mb-4">
          <TutoringInfoCards
          cardTitle="Relaxing and Learning"
          cardDescription="Lorem ipsum dolor sit amet. Nam quasi illo ab excepturi nisi et repudiandae voluptatem. "
          imageSrc={relaxLottie}
          />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center mb-4">
          <TutoringInfoCards
          cardTitle="Certificate"
          cardDescription="Lorem ipsum dolor sit amet. Nam quasi illo ab excepturi nisi et repudiandae voluptatem. "
          imageSrc={certificateLottie}

          />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center mb-4">
          <TutoringInfoCards
           cardTitle="Private Mentoring"
          cardDescription="Lorem ipsum dolor sit amet. Nam quasi illo ab excepturi nisi et repudiandae voluptatem. "
          imageSrc={contractLottie}
          />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center mb-4">
          <TutoringInfoCards
          cardTitle="Creative Thinking"
          cardDescription="Lorem ipsum dolor sit amet. Nam quasi illo ab excepturi nisi et repudiandae voluptatem. "
          imageSrc={creativeThinkingLottie}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default TutoringServicesSection;
