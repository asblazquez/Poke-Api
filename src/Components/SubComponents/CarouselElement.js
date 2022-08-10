import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';

export function CarouselElement(props) {
  return (
    <Row className='justify-content-center mt-3'>
      <Carousel variant="dark" style={{width: '50%'}} className='carusel'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.sprites.back_default}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>Back Default</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.sprites.back_shiny}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Back Shiny</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.sprites.front_default}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Front Default</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.sprites.front_shiny}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Front Shiny</h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Row>
  );
}

