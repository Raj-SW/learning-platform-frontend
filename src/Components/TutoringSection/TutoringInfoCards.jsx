import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Lottie from 'react-lottie';

const TutoringInfoCards = ({cardTitle, imageSrc, cardDescription}) => {
    const options = {
        loop: true,
        autoplay: true,
        animationData: imageSrc,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      };
      return (
        <Card
          style={{
            width: '18rem',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '1rem',
          }}
          className="text-center"
        >
          <Lottie options={options}height={200} width={200}  />
          <Card.Body>
            <Card.Title>{cardTitle}</Card.Title>
            <Card.Text>
              {cardDescription}
            </Card.Text>
          </Card.Body>
        </Card>
      );
    };
    

export default TutoringInfoCards