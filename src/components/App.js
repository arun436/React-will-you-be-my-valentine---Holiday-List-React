
import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.cityList = [{ name: 'Goa', country: 'India' },
    { name: 'Amsterdam', country: 'Netherlands' },
    { name: 'New York', country: 'USA' },
    { name: 'Darjeeling', country: 'India' },
    { name: 'Tokyo', country: 'Japan' },
    { name: 'Lonavala', country: 'India' },
    { name: 'Brandenburg Gate', country: 'Germany' },
    { name: 'Reichstag Building', country: 'Germany' },
    { name: 'Museum Island', country: 'Germany' },
    { name: 'Munnar', country: 'India' },
    { name: 'Leh Ladakh', country: 'India' },
    { name: 'Goa', country: 'India' },
    { name: 'Agra', country: 'India' },
    { name: 'Dalhousie', country: 'India' },
    { name: 'Coorg', country: 'India' },
    { name: 'Rome', country: 'Italy' },
    { name: 'Milan', country: 'Italy' },
    { name: 'Venice', country: 'Italy' },
    { name: 'Varanasai', country: 'India' },
    { name: 'Jaipur', country: 'India' },
    { name: 'The Hofburg', country: 'Austria' },
    { name: 'Belvedere Palace', country: 'Austria' },
    { name: 'St. Stephen Cathedral', country: 'Austria' },
    { name: 'Kahna National Park', country: 'India' },
    { name: 'Amritsar', country: 'India' },
    { name: 'Mussoorie', country: 'India' },
    { name: 'Mount Abu', country: 'India' },
    { name: 'Tirupati', country: 'India' },
    ]
  }

  render() {
    var GoaBoolean = false;
    var GoaCity = this.cityList.filter((item) => {
      if(item.name === 'Goa' && GoaBoolean === false)
      {
        GoaBoolean = true;
        return item.name === 'Goa';
      }
    });
    var AmsterdamCity = this.cityList.filter((item) => {
      return item.name === 'Amsterdam';
    });

    var NewYorkCity = this.cityList.filter((item) => {
      return item.name === 'New York';
    });

    var DarjeelingCity = this.cityList.filter((item) => {
      return item.name === 'Darjeeling';
    })

    var TokyoCity = this.cityList.filter((item) => {
      return item.name === 'Tokyo';
    })

    var LonavalaCity = this.cityList.filter((item) => {
      return item.name === 'Lonavala';
    })

    var newCityList = [...GoaCity,...AmsterdamCity,...NewYorkCity,...DarjeelingCity,...TokyoCity,...LonavalaCity];


    return (
      <div id="main">
        <ol>
          {newCityList.map((item, itemIndex) => (
            <li key={`location${itemIndex + 1}`}>{item.name}</li>
          ))}
        </ol>
      </div>
    );
  }
}


export default App;
