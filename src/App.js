import React from "react";
import Title from "./component/Title"
import Form from "./component/form"
import Weather from "./component/weather"


const API_KEY = "99b8fc79d3b9002653f386d572a75ffc"
// initialize state based component
class App extends React.Component {
  //initial state, only gunna change when we press the button
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  // this is a prop
  getWeather = async (e) => {
    // prevent page refresh
    e.preventDefault();
    //grabbing inout from the form
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await api_call.json();
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ' '
      });
    } else {
      this.setState({
        temperature: undefined,
        country: undefined,
        city: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
      });

    }
  }

  render(){
    return (
      <div>
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-xs-5 title-container">
                <Title />
              </div>
              <div className="col-xs-7 form-container">
                <Form getWeather={this.getWeather}/>
                <Weather
                  temperature={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  description={this.state.description}
                  humidity={this.state.humidity}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

// make this component available for other files to import
export default App;
