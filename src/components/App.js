import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
import ContactDetail from "./contactdetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import api from "../api/contacts";
import EditContact from "./EditContact";
import bg from "../images/background.jpg"



const App = () => {
  
  const local_Storage_contacts = "contacts";

  //----------------------------------contacts states------------------------------------------
  const [contacts, setContacts] = useState([]);
  //------------------------------------------------------------------------------------------------



  //-----------------------------------getting all contacts from  from json server-------------------
  /*const retrivecontacts = async () => 
  {
    const response = await api.get("/contacts");
    //console.log(response.data);
    return response.data;
  };*/
  //---------------------------------------------------------------------------------------------------



  //-----------------------------------adding contacts to contacts sate and storing enw contacts to json server----------------------------
  const AddContactHandler = (contact) => 
  {
    if (contact.name === "" || contact.email === "") {
      alert("Please input all fields.");
      return;
    }
    
    const newcontacts = [...contacts, contact];
    setContacts(newcontacts);

    /*const addContactsOnJsonServer = async () => {
      const response = await api.post("/contacts", contact);
      //console.log(response.data);
      const newcontacts = [...contacts, response.data];
      //console.log(newcontacts);
      setContacts(newcontacts);
    };
    addContactsOnJsonServer();*/
    //console.log("addnkjsadbfjsjsda   ankit shsarma");
  };
  //-------------------------------------------------------------------------------------------------------------------------------------------



  //--------------------------------------------setting all contacts retrieves from json server fro 1st time when page loads--------------------
  useEffect(() => {
    
   //--------------------------------------------setting all contacts retrieves from json server fro 1st time when page loads when server not availaible-------------------- 
    const retrive_contacts = JSON.parse(
      localStorage.getItem(local_Storage_contacts)
    );
    if (retrive_contacts) {
      setContacts(retrive_contacts);
    }
  //-----------------------------------------------------------------------------------------------------------------------------------------

  /*const getallcontacts = async () => {
      const allcontacts = await retrivecontacts();
      //console.log(allcontacts);
      if (allcontacts) {
        setContacts(allcontacts);
      }
    };
    getallcontacts();*/


  }, []);
//-----------------------------------------------------------------------------------------------------------------------------------------------



//------------------------------------------------------adding item to local sstorage if server not prrsent--------------------------------------
  useEffect(() => {
    localStorage.setItem(local_Storage_contacts, JSON.stringify(contacts));
    console.log("setitm executing");
  }, [contacts]);
  //----------------------------------------------------------------------------------------------------------------------------------------------



  //-----------------------------------------------------editing contact and saving to server------------------------------------------------------------------
  const editContactHandler = async (ucontact) => {
    if (ucontact.name === "" || ucontact.email === "") {
      alert("Please input all fields.");
      return;
    }

    /*const response = await api.put(`/contacts/${ucontact.id}`, ucontact);
    console.log(response.data);*/

    setContacts(
      contacts.map((contact) => {
        if (contact.id === ucontact.id) {
          contact.name = ucontact.name;
          contact.email = ucontact.email;
        }
        return contact;
      })
    );
    //const newcontacts = [...contacts, response.data];
    //console.log(newcontacts);
    //setContacts(newcontacts);
    //console.log("addnkjsadbfjsjsda   ankit shsarma");
  };
  //-------------------------------------------------------------------------------------------------------------------------------------------------------



//--------------------------------------------------------------------del contact server as well as from contacts state variable-----------------------------
  const del_contact = async (contact_id) => {
    //await api.delete(`/contacts/${contact_id}`);

    const new_ContactList_after_deletion = contacts.filter(
      (contact) => contact.id !== contact_id
    );
    setContacts(new_ContactList_after_deletion);
  };
  //-----------------------------------------------------------------------------------------------------------------------------------------------------------





  //console.log(contacts);
  return (
    <div style={{backgroundImage:`url(${bg})`, backgroundSize:"cover", width:"100vw", height:"100%", backgroundAttachment:"fixed"}}>
    <div style={{ margin: "0 3em 0 3em"}}>
      
      <Router>
      <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <ContactList
                {...props}
                contacts={contacts}
                del_contact={del_contact}
              />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <AddContact {...props} AddContactHandler={AddContactHandler} />
            )}
          />
          <Route path="/contact/:id" component={ContactDetail} />
          <Route
            path="/edit/:id"
            render={(props) => (
              <EditContact {...props} editContactHandler={editContactHandler} />
            )}
          />
        </Switch>
        {/*<AddContact AddContactHandler={AddContactHandler} />*/}
        {/*<ContactList contacts={contacts} del_contact={del_contact}/>*/}
      </Router>
    </div>
    </div>
  );
};

export default App;
