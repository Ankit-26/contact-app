import React from "react";
import { Link } from "react-router-dom";
//import { uuid } from "uuidv4";



class EditContact extends React.Component {
      
     state=
     {   
         id:this.props.location.state.contact.id,
         name:this.props.location.state.contact.name,
         email:this.props.location.state.contact.email,
     }
     

  render() {
    //console.log(this.props);
    //console.log(this.props);
    return (
      <div className="ui main" style={{ paddingTop: "10em", color:"#5f6368" }}>
        <h1>Edit Contact</h1>
        <form className="ui form" onSubmit={(e)=>e.preventDefault()}>
          <div className="field">
            <label style={{color:"#5f6368", fontSize:"1.5rem" }}>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value = {this.state.name}
              onChange={(e) => this.setState({ name: e.target.value})}
            />
          </div>
          <div className="field">
            <label style={{color:"#5f6368", fontSize:"1.5rem" }}>Last Name</label>
            <input
              type="email"
              name="last name"
              placeholder="Email"
              value = {this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <Link to="/">
          <button className="ui button blue" onClick={()=>this.props.editContactHandler(this.state)}>Update</button>
          </Link> 
        </form>
      </div>
    );
  }
}

export default EditContact;
