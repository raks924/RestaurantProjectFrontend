import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../../src/styles.css';
import { alignPropType } from 'react-bootstrap/esm/types';
import MenuList from './MenuList';


const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const Navigate = useNavigate(); // initialize useHistory
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(`Email: ${email} Password: ${password}`);
  
      // Check if email and password match
      if (email === 'rakshita@gmail.com' && password === 'raks91') {
        // If match, navigate to home page
        Navigate('/menulist');
        <MenuList />
      } else {
        // If don't match, alert error message
        setError('Email or password is incorrect');
      }
    }
  
    return (
      <Container className="d-flex flex-column align-items-center mt-5">
        <Form onSubmit={handleSubmit}>
          <Form.Label className='text-center' style={{ color: '#590042', fontSize: '34px', fontFamily: 'Cursive' }} >LOGIN PAGE</Form.Label>
          <Form.Group controlId="formBasicEmail" className="mb-3" style={{ color: '#574327'}}>
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter email" 
              value={email} 
              onChange={(event) => setEmail(event.target.value)}
            />
          </Form.Group>
  
          <Form.Group controlId="formBasicPassword" style={{ color: '#574327'}}>
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>
  
          {error && <div className="text-danger mb-3">{error}</div>} {/* Render error message */}
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
  
  export default LoginPage;
  



