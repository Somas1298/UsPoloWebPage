import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import './Newuser.css';
import axios from 'axios';
import { Link } from 'react-router-dom';




const Newuser = () => {

  const [newUsers, setNewUser] = useState({
    Firstname: "",
    Lastname: "",
    Emailid: "",
    Password: ""
  });

  // const initialform = {
  //   Firstname: "",
  //   Lastname: "",
  //   Emailid: "",
  //   Password: ""
  // }


  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUsers,
      [name]: value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3033/register", newUsers)
      .then((response) => {
        console.log(response.status);
        setMessage("Account created sucessfully");
        setShowMessage(true);
        setTimeout(() => setShowMessage(false),
          );
      })
      .catch((error) => {
        console.log(error);
        setMessage("User Account Creation Failed")
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false)
        }, 3000);
      }
      );

  };

  return (
    <div id='signup' >
      {showMessage && <div id='message-box'>{message}</div>}{""}
      <p id='op'>Create A New Account</p>

      <form id='topdiv' onSubmit={handleSubmit} >
        <input name='Firstname'
          id='firnam'
          placeholder="First name"
          value={newUsers.Firstname}
          onChange={handleChange}
        >
        </input><br></br>
        <input name='Lastname'
          id='lasnam'
          placeholder="Last name"
          onChange={handleChange}
          value={newUsers.Lastname}
        >
        </input><br></br>
        <input name='Emailid'
          id='emailid'
          type="email"
          placeholder="Enter email"
          onChange={handleChange}
          value={newUsers.Emailid}
        >
        </input><br></br>
        <input name='Password'
          id='pass'
          type="password"
          placeholder="Password"
          onChange={handleChange}
          value={newUsers.Password}>
        </input><br></br>
        <Button type="submit" id='bu1'>Submit</Button>
      </form>

    </div>
  );
};

export default Newuser;
