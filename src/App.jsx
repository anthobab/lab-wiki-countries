import './App.css';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import CountriesList from './Components/CountriesList/CountriesList';
import countriesJson from './countries.json';
import { useState, useEffect } from 'react';
import CountryDetails from './Components/CountryDetails/CountryDetails';
import axios from 'axios';

function App() {
  async function getCountries() {
    try {
      const { data } = await axios.get(
        'https://ih-countries-api.herokuapp.com/countries'
      );
      // console.log(data);

      return data;
    } catch (error) {
      console.log(error);
    }

    //
  }
  const [countriesList, setCountriesList] = useState(null);

  useEffect(() => {
    getCountries()
      .then((data) => {
        return setCountriesList(
          data.sort((a, b) => a.name.common.localeCompare(b.name.common))
        );
      })
      .catch((err) => console.error(err));

    // const data = getCountries();
  }, []);
  if (!countriesList) {
    return (
      <div
        className="App"
        style={{
          boxSizing: 'border-box',
          height: '100vh',
          width: '100vw',
          fontSize: '15vw',
          textAlign: 'center',
          verticalAlign: 'middle',
          padding: 'calc(100vh/2 - 15vw) 0 ',
        }}
      >
        <p>Loading ...</p>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-5">
              <CountriesList countries={countriesList}></CountriesList>
            </div>
            <div className="col-7">
              <Routes>
                <Route
                  path="/:alpha3code"
                  element={<CountryDetails countriesList={countriesList} />}
                />
                <Route path="/" element=""></Route>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
