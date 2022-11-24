import React from 'react';
import { Link } from 'react-router-dom';
import './CountryList.css';

const CountriesList = ({ countries }) => {
  console.log(countries);
  const content = countries.map((country) => {
    return (
      <Link
        key={country.alpha3Code}
        to={country.alpha3Code}
        className="list-group-item list-group-item-action"
      >
        <img
          src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
          alt={country.alpha2Code}
        ></img>
        {'  '}
        {country.name.common}
      </Link>
    );
  });
  return <div className="CountryList  list-group">{content}</div>;
};

export default CountriesList;
