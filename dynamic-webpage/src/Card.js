import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import norway from './image/norway.jpeg'

function CardBody() {
  function handleClick() {
    console.log("I was click")
  }

  function handleMouseOver() {
    console.log("Mouse is over me")
  }

  return (
        <div className='col d-flex justify-content-center'>
            <Card style={{ width: '18rem' }}>
                <a href="#"><Card.Img variant="top" src={norway} onMouseOver={handleMouseOver}/><br/></a>
                <Button variant="primary" onClick={handleClick}>Click me!</Button>
            </Card>
        </div>
  );
}

export default CardBody
