import React, { useRef, useState } from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
//import { uuid } from "uuidv4";
import createbutton from "../images/create.png"

const ContactList = (props) => {
  const searchinput = useRef("");
  const [searchOutput, setsearchOutput] = useState([]);

  //console.log((searchinput.current.value.length!==0));

  const searchHandler = () => {
    if (searchinput.current.value !== "") {
      const filteredcontacts = props.contacts.filter((contact) => {
        return String(Object.values(contact).join(" "))
          .toLowerCase()
          .includes(searchinput.current.value.toLowerCase());
      });
      //console.log(filteredcontacts);

      setsearchOutput(filteredcontacts);
    } 
   else {
      setsearchOutput(props.contacts);
    }
  };

  const delHandler = (contact_id) => {
    props.del_contact(contact_id);
  };

  return (
    <div className="ui celled list">
      <div
        style={{
          display: "flex",
          paddingTop: "8rem",
          justifyContent: "space-between",
        }}
      >
        <h1 style={{color:"#5f6368"}}>Contact List</h1>
        <Link to="/add">
          <button className="ui button white right" style={{borderRadius:"25px", fontSize:"1.2rem",display:"flex", alignItems:"center"}}><img src={createbutton} alt="create button" style={{height:"2.5rem", width:"3.5rem", borderRadius:"50p%"}}/><span style={{paddingLeft:"10px"}}>Create Contact</span></button>
        </Link>
      </div>
      <div className="ui search" style={{ margin: "1.5rem 0" }}>
        <div className="ui icon input" style={{ width: "100%" }}>
          <input
            ref={searchinput}
            type="text"
            placeholder="Search Contacts"
            className="prompt"
            onChange={searchHandler}
            style={{border:"4px solid lightgrey"}}
          ></input>
          <i className="search icon " />
        </div>
      </div>

      {searchinput.current.value?(searchOutput.length?searchOutput.map((contact) => (
        <ContactCard
          key={contact.id}
          contact={contact}
          delHandler={delHandler}
        />
      )):"0 results found"):(props.contacts.sort((a,b)=> (a.name.toLowerCase()<b.name.toLowerCase()?-1:((a.name.toLowerCase()>b.name.toLowerCase())?1:0)))).map((contact) => (
        <ContactCard
          key={contact.id}
          contact={contact}
          delHandler={delHandler}
        />
      ))}
    </div>
  );
};

export default ContactList;
