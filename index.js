import React from 'react';
import ReactDOM from 'react-dom';


// Making Components
class WebD extends React.Component {
  constructor(){
    super();  // Super Keyword is added to initialize constructor of parent class and inherit functions and accessing the parents components
      this.state = {color: "geeen"};  //In React Component Properties should be kept in an Object called state
  }
render() {
  return <h2 align = "center">Hi, I'm a {this.state.color} Car </h2> ;
    }   
}

class WebD2 extends React.Component{
  render(){
    return (
    <div>
     <WebD/> 
     {/* We have used  above(WebD) react elements here in(WebD2) */}
      <div>WebD2 is here</div>
    </div>
      
    )
  }
}


// Rendering Our Component to root div
ReactDOM.render(
<WebD2/>, 
  document.getElementById('root')
);





