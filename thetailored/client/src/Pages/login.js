import React from 'react';
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import '../App.css';

function Login() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

  const handleSubmit = async () => {
    const payload = {
      name: name,
      surname: surname,
      email: email,
      password: password,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/user/', payload);
      console.log('User data submitted', response.data);
      //navigate('/READ')
    } catch (error) {
      console.error('Error submitting clothes data');
    }
  };

    return (
        <div className="login-container">
            <h2 style={{color:'white'}}>Login</h2>
            <form onSubmit={handleSubmit}>
                {error && <p className="error">{error}</p>}
                <div className="input-group">
                    <label htmlFor="email" style={{color:'white'}}>Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password" style={{color:'white'}}>Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" href='/landing'>Login</button>
            </form>
        </div>
    );
}

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