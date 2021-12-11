import React from "react";

class Details extends React.Component {
  render() {
    let details = this.props.details; //Receiving Props coming from App
    console.log(details);
    return (
      <div>
        <li>
          {details.map((data) => {
            console.log("data", data);
            return <ol>Move Title :{data.title}</ol>;
          })}
        </li>
      </div>
    );
  }
}

export default Details;


//Forget about counter conponent for Now, Just Focus on App.js and Details.js.


//Idea for this session is to Pass movieDetails from App component to Details component
// App is parent and Details is Child - Because we are rendering Details in App.
//Thus Parent and Child relationship is formed.

//We are doing an dummy API call and response data in state of APP

// Below we pass data to Details as a prop
// Next step - Receive data inside Details and showing in the details component HTMl code

//Concepts to Learn
//Parent/child Concept in react -> between components
//Learn About Lifecycle - ComponentDidMount()
//Learn about props - Do some handson props