import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Meme() {
  return (
    <Container className='form'>
        <Row>
            <Col>  
                <Form>
                    <Form.Group className="mb-3">   
                        <Form.Control type="text" placeholder="Enter youe text" />
                    </Form.Group>
                </Form>
            </Col>
            <Col>
                <Form>
                    <Form.Group className="mb-3">   
                        <Form.Control type="text" placeholder="Enter youe text" />
                    </Form.Group>
                </Form>
            </Col>
        </Row>

        <div className="d-grid gap-2">
            <Button size="lg" className='button'>
            Get a new meme image
            </Button>
        </div>
    </Container>




  );
}

export default Meme;