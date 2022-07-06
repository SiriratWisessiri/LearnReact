
import './App.css';
import Joke from './Joke';
import JokeData from './JokeData';
import Message from './message';

function App() {
  const jokeElement = JokeData.map(joke => {
    return (
      <Joke
        id={joke.id}
        setup={joke.setup}
        punchline={joke.punchline}
      />
    )
  })
  return (
    <div>
      <div className="element">
        {jokeElement} 
      </div>
      <div className="element">
        <Message />
      </div>
     </div>
  );
}

export default App;
