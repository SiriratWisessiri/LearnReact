import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import norway from './image/norway.jpeg'

function CardBody() {
  return (


        <div className='col d-flex justify-content-center'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={norway}/><br/>
                <Button variant="primary">Go somewhere</Button>
            </Card>
        </div>
  );
}

export default CardBody
