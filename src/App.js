import React from "react";
import Counter from "./Components/Counter";
import Details from "./Components/Details";
import UserInfo from "./Components/UserInfo";
import EventHandling from "./Components/EventHandling";


class App extends React.Component {
  //Simple class Component
  constructor(props) {
    super(props);
    this.state = {
      details: [],
      message: "", //Empty array State for storing API data
    };
  }

  componentDidMount() {
    //Lifecycle being used to call API
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        if (data.length >= 1) {
          console.log("I am here")
          this.setState({
            details: data,
          });
        }
        else {
          this.setState({
            message : "Error, Data not available"
          });
        }
      });
  }

  render() {
    return (
      <div>
        {/* <Counter />
        passing state containing API data to Details as a prop
        <Details 
        details={this.state.details}
        message = {this.state.message} />
        <UserInfo /> */}
        <EventHandling />
      </div>
    );
  }
}

export default App;
