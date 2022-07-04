import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import memesData from './memesData';
import React, {useState} from 'react';
        /**
     * - Create new state called `memeImage` with an
     *   empty string as default
     * - When the getMemeImage function is called, update
     *   the `memeImage` state to be the random chosen
     *   image URL
     * - Below the div.form, add an <img /> and set the
     *   src to the new `memeImage` state you created
     */
        /**
     * Challenge: Update our state to save the meme-related
     * data as an object called `meme`. It should have the
     * following 3 properties:
     * topText, bottomText, randomImage.
     * 
     * The 2 text states can default to empty strings for now,
     * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
     * 
     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     * 
     * Lastly, update the `getMemeImage` function and the markup 
     * to reflect our newly reformed state object and array in the
     * correct way.
     */
function Meme() {
    // const [memeImage, setMemeImage] = useState("")
    const [meme, setMeme] = useState(
        {
            topText: "", 
            bottomText: "", 
            randomImage: "https://i.imgflip.com/30b1gx.jpg"
        }
    )
    
    const [allMemeImages, setAllMemeImages] = useState(memesData)

    function getMemeImage() {
       const memesArray = allMemeImages.data.memes
       const randomNumber = Math.floor(Math.random() * memesArray.length)
       const url = memesArray[randomNumber].url
//    console.log(url)
        setMeme(prevState => ({
                ...prevState,
                randomImage: url
            })
        )
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
            <img src= {meme.randomImage} className="meme-image"/>
        </div>

    </Container>
  );
}

export default Meme;