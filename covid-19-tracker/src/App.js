import React, { useEffect, useState } from "react";
import {
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core"
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const getCountreisData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => (
          {
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setCountries(countries);
      });
    };
    getCountreisData();
  },[]);

  return (
    <div className="app">
      <div className="app__header">
      <h1>COVID 19 TRACKER</h1>
      <FormControl className="app__dropdown">
        <Select variant ="outlined" value ="abc">

          {
            countries.map(country => (
              <MenuItem value={country.value}>{country.name}</MenuItem>              

            ))}
          {/* <MenuItem value = "worldwide"> Worldwide</MenuItem>
          <MenuItem value = "country1"> Country 1</MenuItem>
          <MenuItem value = "country2"> Country 2</MenuItem>
          <MenuItem value = "country3"> Worldwide</MenuItem> */}


        </Select>

      </FormControl>
      </div>
      
     {/* Header 1 */}
     {/* Title + select input dropdown field */}
     
     {/* InfoBox*/}
     {/* InfoBox*/}
     {/* InfoBox*/}

     {/* Table */}
     {/* Graph */}

     {/* Map */}
    </div>
  );
}

export default App;
