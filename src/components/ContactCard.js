import React from "react";
import user from '../images/contactlogo.png';
import { Link } from "react-router-dom";

const ContactCard = (props) => {
  const { contact} = props;
  //console.log(contact);
  //console.log(props);

  return (
    <div className="item" style={{ display: "flex", padding:".7rem"}}>
      <img className="ui avatar image" src={user} alt="user"/>
      <div className="content" style={{ width: "91.56vw",  overflowWrap:"break-word"}}>
        <Link to={{pathname:`/contact/${contact.id}`, state:{contact:contact}}}>
        <h3><div className="header">{contact.name}</div>
        <div>{contact.email}</div>
        </h3>
        </Link>
      </div>
      <Link to={{pathname:`/edit/${contact.id}`, state:{contact:contact}}}>
      <i
        className="edit alternate outline icon"
        style={{ color:"cornflowerblue", marginTop:"5px", marginRight:"1rem"}}
      ></i>
      </Link>
      <i
        className="trash alternate outline icon"
        style={{ color:"red", marginTop:"5px", cursor:"pointer", marginLeft:"1rem"}}
        onClick={()=>props.delHandler(contact.id)}
      ></i>
    </div>
  );
};

export default ContactCard;
