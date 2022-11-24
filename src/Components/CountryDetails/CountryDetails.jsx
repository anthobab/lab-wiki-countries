import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const CountryDetails = ({ countriesList }) => {
  const { alpha3code } = useParams();
  //   const country = countriesList.find(
  //     (country) => country.alpha3Code === alpha3code
  //   );
  //   console.log(country);
  const [country, setCountry] = useState(null);
  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries/' + alpha3code)
      .then(({ data }) => {
        setCountry(data);
        console.log(data, country);
      })
      .catch((err) => console.error(err));
  }, [alpha3code]);

  if (!country) {
    return (
      <div className="CountryDetails">
        <p>Loading ...</p>
      </div>
    );
  } else {
    return (
      <div className="CountryDetails">
        <h1>{country.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {country.borders.map((alpha3CodeBorder) => {
                    return (
                      <li key={alpha3CodeBorder}>
                        <Link to={`/${alpha3CodeBorder}`}>
                          {
                            countriesList.find(
                              (borderCountry) =>
                                borderCountry.alpha3Code === alpha3CodeBorder
                            ).name.common
                          }
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
};

export default CountryDetails;
