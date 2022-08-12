import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';

export function CarouselElement(props) {
  return (
    <Row className='justify-content-center'>
      <Carousel variant="light" style={{width: '100%'}}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.sprites.back_default}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.sprites.back_shiny}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.sprites.front_default}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.sprites.front_shiny}
            alt=""
          />
        </Carousel.Item>
      </Carousel>
    </Row>
  );
}

