import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import memesData from './memesData';
import React, {useEffect, useState} from 'react';

//  This excercise to get the memes data fromhe API instead of own data file. And learning of useEffect

    /**
     * Challenge: 
     * As soon as the Meme component loads the first time,
     * make an API call to "https://api.imgflip.com/get_memes".
     * 
     * When the data comes in, save just the memes array part
     * of that data to the `allMemes` state
     * 
     * Think about if there are any dependencies that, if they
     * changed, you'd want to cause to re-run this function.
     * 
     * Hint: for now, don't try to use an async/await function.
     * Instead, use `.then()` blocks to resolve the promises
     * from using `fetch`. We'll learn why after this challenge.
     */

function MemeAPI() {
    const [meme, setMeme] = useState(
        {
            topText: "", 
            bottomText: "", 
            randomImage: "https://i.imgflip.com/261o3j.jpg"
        }
    )

    const [allMemeImages, setAllMemeImages] = useState([])

    //  As soon as the Meme component loads the first time,
    //  make an API call to "https://api.imgflip.com/get_memes".
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(rest => rest.json())
        .then(APIdata => setAllMemeImages(APIdata.data.memes))
    }, [])

    function getMemeImage() {
    //    const memesArray = allMemeImages.data.memes
    //    const randomNumber = Math.floor(Math.random() * memesArray.length)
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        setMeme(prevState => ({
                ...prevState,
                randomImage: url
            })
        )
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme=> (
            {
                ...prevMeme,
                [name] : value
            }))
    }

  return (
    <Container className='form'>
        <Row>
            <Col>  
                <Form>
                    <Form.Group className="mb-3">   
                        <Form.Control 
                            type="text" 
                            placeholder="Enter youe text" 
                            name='topText'
                            value={meme.topText}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Form>
            </Col>
            <Col>
                <Form>
                    <Form.Group className="mb-3">   
                        <Form.Control 
                            type="text" 
                            placeholder="Enter youe text" 
                            name='bottomText'
                            value={meme.bottomText}
                            onChange={handleChange}
                            />
                    </Form.Group>
                </Form>
            </Col>
        </Row>

        <div className="d-grid gap-2">
            <Button size="lg" className='button' onClick={getMemeImage}>
            Get a new meme image
            </Button>
        </div>
        <div className='meme'>
            <h2 className=" meme-text top">{meme.topText}</h2>
            <img src= {meme.randomImage} className="meme-image"/>
            <h2 className="meme-text bottom">{meme.bottomText}</h2>
        </div>
    </Container>
  );
}

export default MemeAPI;

