import React from "react";

// class Form extends React.Component {
//   render() {
//     return (
//       <form onSubmit={this.props.getWeather}>
//         <input type='text' name='city' placeholder="city .."/>
//         <input type='text' name='country' placeholder="country .."/>
//         <button>get wheater</button>
//       </form>
//     )
//   }
// }

const Form = props => (
  <form onSubmit={props.getWeather}>
          <input type='text' name='city' placeholder="city .."/>
          <input type='text' name='country' placeholder="country .."/>
          <button>get wheater</button>
  </form>
);
export default Form;
