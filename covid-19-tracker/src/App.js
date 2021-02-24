import React, { useEffect, useState } from "react";
import {
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import InfoBox from "./infoBox";
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  
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


  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    console.log("YAY",countryCode);
    
    setCountry(countryCode);
  };

  return (
    <div className="app">
      <div className="app__header">
      <h1>COVID 19 TRACKER</h1>
      <FormControl className="app__dropdown">
        <Select variant ="outlined" onChange={onCountryChange} value ={country}>
        <MenuItem value="worldwide">Worldwide</MenuItem>
          {countries.map(country => (
              <MenuItem value={country.value}>{country.name}</MenuItem>              

            ))}
        </Select>

      </FormControl>
      </div> 
      <div className="app__stats">
        <InfoBox title="Coronavirus Cases" cases={123} total={2000}/>
        <InfoBox title="Recovered" cases={1234} total={3000} />
        <InfoBox title="Deaths" cases={12345} total={50000} />
      </div>




     {/* Table */}
     {/* Graph */}

     {/* Map */}
    </div>
  );
}

export default App;
