import React from "react";
import {
  MenuItem,
  FormControl,
  Select,
} from "@material"
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>COVID 19 TRACKER</h1>
      <FormControl className="app_dropdown">
        <Select variant ="outline" value ="abs">
          <menuItem value = "worldwide"> Worldwide</menuItem>
          <menuItem value = "worldwide"> Country 1</menuItem>
          <menuItem value = "worldwide"> Country 2</menuItem>
          <menuItem value = "worldwide"> Worldwide</menuItem>


        </Select>

      </FormControl>
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
