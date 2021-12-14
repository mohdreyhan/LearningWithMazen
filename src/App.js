import React from "react";
import Counter from "./Components/Counter";
import Details from "./Components/Details";
import UserInfo from "./Components/UserInfo";

class App extends React.Component {  //Simple class Component
  constructor(props) {
    super(props);
    this.state = {
      details: [], //Empty array State for storing API data
    };
  }

  componentDidMount() { //Lifecycle being used to call API
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => {
        this.setState({
          details : data
        })
      });
  }

  render() {
    return (
      <div>
        <UserInfo />
        {/* <Counter />
        passing state containing API data to Details as a prop
        <Details details = {this.state.details}/>  */}
      </div>
    );
  }
}

export default App;


