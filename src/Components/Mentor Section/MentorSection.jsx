import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import teacherLottie from '../../assets/MentorSectionAsset/MentorLottie.json';
import Lottie from 'react-lottie';

const MentorSection = () => {
    const options = {
        loop: true,
        autoplay: true,
        animationData: teacherLottie,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      };

  return (
    <Container fluid className="feature-section py-5 d-flex flex-column align-items-center rounded-5" style={{ backgroundColor: '#800080', color: '#fff' }} id='Mentors'>
      <Row className="align-items-center w-100">
        <Col md={6} className="text-section p-4">
          <div className="feature-text">
            <h5 className="feature-title">FEATURES</h5>
            <h1 className="mt-2 mb-4">Specify the time and day of private class</h1>
            <p className="mb-4">
              Due to the availability of our tutors in a variety of time slots
              that are totally tailored to each student's specific pace, our
              scheduling system enables meticulous decision-making about time
              and student compatibility.
            </p>
            <Button variant="primary">Search Teachers</Button>
          </div>
        </Col>
        <Col md={6} className="d-flex justify-content-center align-items-center p-4">
          <div
            style={{
              position: 'relative',
              width: '100%',
              borderRadius: '1rem',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              padding: '1rem',
              background: 'white'
            }}
          >
            <Lottie
              options={options}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MentorSection;
