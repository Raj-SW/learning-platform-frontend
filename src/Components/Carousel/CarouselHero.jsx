import Carousel from 'react-bootstrap/Carousel';
import cBanner from '../../assets/CarouselAssets/cbanner.png';
import sqlBanner from '../../assets/CarouselAssets/SQLCoursebanner.webp';
import reactBanner from '../../assets/CarouselAssets/reactbanner.png';
import './Carousel.css';

function CarouselHero() {
  return (
    <div className="carousel-wrapper" id='Courses'>
    <div className="carousel-container">
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block  carousel-image"
            src={cBanner}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block   carousel-image"
            src={sqlBanner}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block   carousel-image"
            src={reactBanner}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    </div>
  );
}

export default CarouselHero;
