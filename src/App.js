import QuoteCard from './components/QuoteCard/QuoteCard';
import { useState } from 'react';
import axios from 'axios';

const sampleQuote = {
  quote: "Marriage is like a coffin and each kid is another nail.",
  character: "Homer Simpson",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
  characterDirection: "Right"
  };

function App() {
  // Creation of state for quote from API
  const [apiQuote, setApiQuote] = useState(sampleQuote);

  // Creation of function to get quote from API
  const getApiQuote = () => {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        setApiQuote(data[0]);
        console.log(data)
      });
  };

  return (
    <div className="App">
      <div>*** No prop Card (stage 1) ***</div>
      <QuoteCard
      quote= "Shut up, brain. I got friends now. I don't need you anymore."
      character= "Lisa Simpson"
      image= "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083"
      />
      <div>*** Sample Card (stage 2) ***</div>
      <QuoteCard {...sampleQuote} />
      <div>*** API Card (final stage) ***</div>
      <button type="button" onClick={getApiQuote}> -- Click to get a new random quote from API -- </button>
      <QuoteCard {...apiQuote} />
    </div>
  );
}

export default App;
