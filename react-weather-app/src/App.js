import React from 'react';
import './App.css';
import {Title} from './components/Title';
import {Form} from './components/Form';
import {Weather} from './components/Weather';

const apiKey ='2df8c55703d7bc6faabcf54584e1bd30';

class App extends React.Component {
  getWeather = async (e) => {
    e.preventDefault();
    const apiCall = await fetch(`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${apiKey}&units=metrics`);
    const data = await apiCall.json();
    console.log(data);
  }
  render(){
    return (
      <div>
        <Title />
        <Form getWeather={this.getWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;
