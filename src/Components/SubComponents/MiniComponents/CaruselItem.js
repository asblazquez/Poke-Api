import Carousel from 'react-bootstrap/Carousel';

export function CaruselItem(props) {
  return (
    <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.url}
          alt="First slide"
        />
    </Carousel.Item>
  )
}