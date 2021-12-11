import React from "react";
import Counter from "./Components/Counter";
import Details from "./Components/Details";

class App extends React.Component {  //Simple class Component
  constructor(props) {
    super(props);
    this.state = {
      details: [] //Empty array State for storing API data
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
        {/* <Counter /> Not Rendering counter as of now- Code commented*/}
        {/* passing state containing API data to Details as a prop */}
        
        <Details details = {this.state.details}/> 
      </div>
    );
  }
}

export default App;


