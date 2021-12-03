import React from "react";
import user from "../images/user.png";

const ContactDetail = (props) => {
  const {name,email} = props.location.state.contact
  console.log(name,email)
  return (
    <div className="main" style={{paddingTop: "10em" }}>
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user"></img>
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;

