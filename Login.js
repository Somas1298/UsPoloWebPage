import React from 'react';
import './Login.css';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import axios from 'axios';





const Login = () => {
  const initialFormState = {
    Emailid: "",
    Password: ""
  };
  const [newUsers1, setNewUser] = useState({
    Emailid: "",
    Password: ""
  });

  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUsers1,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3033/login", newUsers1)
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          console.log('Firstname: ' + response.data.Firstname)
          setMessage("Login Sucessfully");
          setShowMessage(true);
          setTimeout(() => {
            setShowMessage(false)
            setNewUser(initialFormState);
            localStorage.setItem('Firstname', response.data.Firstname);
            window.location.href="/App"
          }, 2000);

        }
      })

      .catch((error) => {
        console.log(error);
        setMessage("Registstion Failed.Pls try again.");
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage((false), 3000);
        })
      });
  };



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id='login'>
      <div>
        {showMessage && <div className="message-box">{message}</div>}{""}
        <h3 id='log'>Login</h3>
        <div>
          <form onSubmit={handleSubmit}>
            <input id='Emailid'
              type='email'
              // onSubmit={handleSubmit}
              name='Emailid'
              placeholder='Enter Your EmailId'
              value={newUsers1.Emailid} onChange={handleChange} required></input><br></br>
            <input id='pas'
              type='password'
              // onSubmit={handleSubmit}
              name='Password'
              placeholder='Enter Your Password'
              value={newUsers1.Password} onChange={handleChange} required></input><br></br>
            <input className='btn btn-primary' type="submit" value="Submit" id='bu' />
            <Link to='/Newuser'><Button type="Button" id='bu'>Create New Account</Button></Link>
          </form>
          <Button variant="primary" id='fp' onClick={handleShow}>
            Forgot Password

          </Button>
        </div>
        <div >
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Forgot Password</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <input id='Emailid1' type='email' placeholder='Enter Your EmailId'></input><br></br>
              <input id='otp' placeholder='Enter  OTP'></input>
              <Link to="/"><Button type="submit" id='bu'>Submit</Button></Link>

            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
    </div>
  )

}
export default Login
