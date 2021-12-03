import React from "react";
import { Link } from "react-router-dom";
import { uuid } from "uuidv4";



class AddContact extends React.Component {
  state = {
    id:"",
    name: "",
    email: "",
  };
   
  

  render() {

    //console.log(this.props);
    return (
      <div className="ui main" style={{ paddingTop: "10em",color:"#5f6368"}}>
        <h1 >Add Contact</h1>
        <form className="ui form" onSubmit={(e)=>e.preventDefault()}>
          <div className="field">
            <label style={{color:"#5f6368", fontSize:"1.5em"}}>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value = {this.state.name}
              onChange={(e) => this.setState({ name: e.target.value,id:uuid()})}
              style={{border:"4px solid lightgrey"}}
            />
          </div>
          <div className="field">
            <label style={{color:"#5f6368", fontSize:"1.5rem"}}>Last Name</label>
            <input
              type="email"
              name="last name"
              placeholder="Email"
              value = {this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
              style={{border:"4px solid lightgrey"}}
            />
          </div>
          <Link to="/">
          <button className="ui button blue" onClick={()=>this.props.AddContactHandler(this.state)}>Add</button>
          </Link> 
        </form>
      </div>
    );
  }
}

export default AddContact;
