import React from "react";
//import styles from './Header.module.css';
import contaclog0 from "../images/contactlogo.png"
import { Link } from "react-router-dom";

const Header = () => {
  //console.log("header execute");
  return(
      <div className="ui fixed menu" style={{boxShadow:"0px -23px 70px lightgrey"}}> 
          <div className="ui container center" style={{justifyContent:"flex-stsart",height:"5em", alignItems:"center", width:"100%"}}>
               <Link  to="/">
               <div style={{display:"flex",alignItems:"center" , marginLeft:"3rem"}}><img style={{width:"3.5rem", height:"3.3rem"}} src={contaclog0} alt="logo"/><h1 style={{color:"#5f6368",justifyContent:"flex-start", fontSize:"2.5rem",marginTop:"0",marginLeft:"0.5rem",fontWeight:"100"}}>Contacts</h1></div>
               </Link>
          </div>
      </div>

       
      )
};

export default React.memo(Header);
