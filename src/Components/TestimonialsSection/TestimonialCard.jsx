import React from 'react';
import { Card, Image } from 'react-bootstrap';

const TestimonialCard = ({profileimg,name,profession,description}) => {
  return (
    <Card className="testimonial-card shadow-sm rounded-3 p-3 mb-4">
      <Card.Header className="d-flex align-items-center">
        <div className="profile-img-container me-3">
          <Image src={profileimg} alt="" roundedCircle className="profile-img" />
        </div>
        <div className="person-description">
          <h5 className="mb-0">{name}</h5>
          <small className="text-muted">{profession}</small>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Text className="testimonial-description">
          {description}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        {new Date().toLocaleDateString()}
      </Card.Footer>
    </Card>
  );
};

export default TestimonialCard;
