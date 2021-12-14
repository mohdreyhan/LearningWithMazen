import React from "react";

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: [], //empty array to store input data
    };
  }

  handleChange = (event) => {  //on change event handler
    let name = event.target.name;  //Accessing input field name from event
    let value = event.target.value; //Accessing input field value from event
    this.setState({
      userInfo: {...this.state.userInfo, [name]: value } //storing event data to state
    });
  };

  handleClick = () => {  // button on click handler
    console.log(this.state.userInfo);  //showing data in console when button click
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          onChange={(e) => this.handleChange(e)} //calling onchange function and passing event
        />
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          onChange={(e) => this.handleChange(e)}
        ></input>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          onChange={(e) => this.handleChange(e)}
        />
        <button onClick = {this.handleClick}>Submit</button> //calling handleclick function
      </div>
    );
  }
}

export default UserInfo;


//Idea for this Session is to learn about handling events(onclick, onchange) 
//accessing data entered in a input field when onchange events happens 
//accessing data from an event using event.target.value
//calling any function when any event occurs