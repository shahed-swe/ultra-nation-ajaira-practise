import {useState, useEffect} from 'react';
import Country from './Components/Country/Country';
import './App.css'
import Cart from './Components/Cart/Cart';

const App = () => {
  
  const [countries, setCountry] = useState([]);

  const [newcon, setNewcon] = useState([]);
  
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(json => setCountry(json.length ? json : []))
      .catch(error => console.log(error))
  }, []);

  console.log(countries)

  const handleCountry = country => {
    const newCart = [...newcon, country];
    setNewcon(newCart)
  }

  return (
      <div>
        <div className="allcountry">
          <Cart cart={newcon}/>
          {countries.map(country => {
            return (
              <Country country={country} handleCountry={handleCountry}/>
              
            )
          })}
        </div>
      </div>
  )
}

export default App;
