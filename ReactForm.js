import React from 'react'
// import ReactDom from 'react-dom'

class Myform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        Remark: "Excellent",
        description: 'The content of a text Area goes in the value attribute',
        username: '', 
        age: null,
        errormessage: ''
        };
    }
    myChangeHandler = (event) => {
        let nam= event.target.name;
        let val= event.target.value;
        let err= '';
        if(nam === "age"){
            if(val !=="" && !Number(val)){
                err = <strong>Your Age must be a number</strong>
            }
        }
        this.setState({errormessage: err});
        this.setState({[nam]: val});
    }
    submitHandler = (event) =>{
        event.preventDefault();
        alert("you are submitting th form "+this.state.username);
}
    render() {
    //   let footer =" ";  
    //     if(this.state.username){
    //     footer = <p>Hello, {this.state.username} {this.state.age}</p>
    //     }

    const myRemark = <select value={this.state.Remark}>
        <option value='Excellent'>Excellent</option>
        <option value="Good Work, keep it up">Good Work, keep it up</option>
        <option value='NeeedsMore Improovements'>Needs More Improovements</option>
    </select>

      return (
        <form align = "center" onSubmit={this.submitHandler}>
          <p> Hey {this.state.username} {this.state.age} let's connect</p>
          <p>Enter your Name:</p>
          <input
            type="text"
            name="username"
            onChange={this.myChangeHandler}
          />
          <br/>
      <p>Enter your Age, {this.state.username}</p>
            <input 
             type="text" 
             name = "age"  
             onChange={this.myChangeHandler}
      /> {this.state.errormessage}
               <br/><br/>  
               {myRemark}
               <br/><br/>
               <textarea value={this.state.description} style={{backgroundColor: 'skyblue'}} />  <br/><br/>   
          <input type='submit'/>
          
        </form>
      );
    }
  }
export default Myform;