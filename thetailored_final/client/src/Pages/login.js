import React, { useState } from 'react';
import './Forms.css';
import axios from 'axios'

import { Nav } from 'react-bootstrap'


const Login = () => {

  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState();
  // const [eror, setEror] = useState();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value })
  };

  //authorise log in
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = 'http://localhost:5002/api/auth'
      const { data: res } = await axios.post(url, data);
      sessionStorage.setItem("token", res.data);
      sessionStorage.setItem("useremail", data.email);

      if (data.email === 'wetso@gmail.com') {
        sessionStorage.setItem('Admin', true);
      } else {
        sessionStorage.setItem('Admin', false);
      }

      window.location = '/';

    } catch (error) {

      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        const errorData = error.response.data.message;
        setError(errorData);
        console.log(error)
        //   {
        //   email: errorData.email ? errorData.email : 'Email is incorrect or invalid!',
        //   password: errorData.password ? errorData.password : 'Password is incorrect!',
        // }
      }
    }
  };

  return (
    <div className="form-container">
      {/* Logo */}
      {/* Add your logo here */}
      <h2>Log In</h2>
      <form className="forms">
        <label>Email:</label>
        <input
          className='email'
          id='email'
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="Enter your email"
          required
        />
        {error && <p className='login-invalid-message-email'> { error } </p>}

        <label>Password:</label>
        <input
          className='password'
          id='password'
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="Enter your password"
          required
        />
        {error && <p className='login-invalid-message-password'> { error } </p>}

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div className="form-footer">
          <p>Don't Have An Account? <br></br><Nav.Link href='/register' style={{ textDecoration: 'none', color: '#007BFF', fontWeight: '700' }}>Sign Up</Nav.Link></p>
        </div>
      </form>
      <br></br>
      <br></br>
      <button className='subbut' onClick={handleSubmit}> Done </button>
    </div>
  );
};

export default Login;

// .App {
   
// }

// .header {
//   height: 100px;
//   width: 100%;
//   background-color: grey;
  
  
// }

// .page {
//   max-height: max-content;
//   min-height: 90vh;
//   width: 97%;
//   background-color: dodgerblue;
// }

// .foot {
//   height: 300px;
//   width: 100%;
//   background-color: grey;
//   border-top: solid, blue, 10px;
// }