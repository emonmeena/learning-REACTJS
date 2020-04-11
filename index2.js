// this file contains Part 2 of the Practice session
import React from 'react'
// import ReactDom from 'react-dom'


// Changing the State object
class Car extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "Centuary one",
            brand: "Meina ",
            yearLaunched: 2039,
            model: 9,
            color: "Inspiron Blue"
        };
    }
    
    
    
    componentDidMount() {
        setTimeout(() =>{
            this.setState({color: "Naya Color"})
        }, 2000);
    }

    // static getDerivedStateFromProps(props, state) {
    //     return {color: props.carColor};
    // }

    render(){
        const mystyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
          };
        return (
            <div align="center">
                
                <h1 >My {this.state.brand+" "+this.state.name}</h1>
                <p style={mystyle}>
                    it is a model {this.state.model} , shinning in {this.state.color}
                </p>
                
            </div>
        );
    }
}
export default Car;
// React LifeCycle
// Mounting means putting elements into DOM
// react ha sfour built in components which are called while mounting
/*
1. Constructor()
2. getDerivedStateFrompropps() it update the states based on Props
3.render()
4.ComponentDidMount() here we run the statemnts ehich requires components is already placed in the DOM
*/