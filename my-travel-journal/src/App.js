import './App.css';
import Card from './Card';
import Nav from './nav';
import data from './data';

function App() {
  const cards = data.map(item => {
    return (
      <Card 
        key = {item.id}
        item = {item}
        // Or you can use spread syntax {...item} and remove .item (after props. in Card.Js file Card components)
        // image = {item.image}
        // country = {item.country}
        // location = {item.location}
        // date = {item.date}
        // description = {item.description}
      />
    )
  })
  return (
    <div className="App">
      <Nav />
      {cards} 
      {/* we use {} around cards instead as it is now Javascript cal back function(inside the app function) */}
    </div>
  );
}

export default App;
