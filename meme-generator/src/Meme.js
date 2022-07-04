import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import memesData from './memesData';
import React, {useState} from 'react';

function Meme() {
        /**
     * - Create new state called `memeImage` with an
     *   empty string as default
     * - When the getMemeImage function is called, update
     *   the `memeImage` state to be the random chosen
     *   image URL
     * - Below the div.form, add an <img /> and set the
     *   src to the new `memeImage` state you created
     */
    const [memeImage, setMemeImage] = useState("")
    function getMemeImage() {
       const memesArray = memesData.data.memes
       const randomNumber = Math.floor(Math.random() * memesArray.length)
       const url = memesArray[randomNumber].url
    //    console.log(url)
        setMemeImage(url)
    }

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
            <Button size="lg" className='button' onClick={getMemeImage}>
            Get a new meme image
            </Button>
        </div>
        <div>
            <img src= {memeImage} className="meme-image"/>
        </div>

    </Container>
  );
}

export default Meme;