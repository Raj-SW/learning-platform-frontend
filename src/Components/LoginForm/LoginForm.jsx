import React, { useState } from 'react';
import loginLottie from "../../assets/FormsAssets/loginLottie.json";
import Lottie from 'react-lottie';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/;

const LoginForm = () => {
  const navigate = useNavigate();

  const [formData,setFormData] = useState({
    email:'',
    password:'',
  });
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState({});

  const options = {
    loop: true,
    autoplay: true,
    animationData: loginLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let errorMsg = '';
    let isValid = false;

    switch (name) {

      case 'email':
        if (value.trim() === '') {
          errorMsg = 'Email is required.';
        } else if (!EMAIL_REGEX.test(value)) {
          errorMsg = 'Please enter a valid email address.';
        } else {
          isValid = true;
        }
        break;
      case 'password':
        if (value.trim() === '') {
          errorMsg = 'Password is required.';
        } else if (!PASSWORD_REGEX.test(value)) {
          errorMsg = 'Password must be at least 4 characters long, and include at least one uppercase letter, one number, and one special character.';
        } else {
          isValid = true;
        }
        break;
    }

    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: errorMsg,
    }));

    setValid(prevValid => ({
      ...prevValid,
      [name]: isValid,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = {};

    // Basic validation
    if (!formData.email) {
      formErrors.email = "Email is required";
    }
    if(!EMAIL_REGEX.test(formData.email))
    {
      formErrors.email = "Email is in wrong format";
    }
    if (!formData.password) {
      formErrors.password = "Password is required";
    }
    if (!PASSWORD_REGEX.test(formData.password)) {
      formErrors.password = "Password must be at least 4 characters long, and include at least one uppercase letter, one number, and one special character.";
    }
    setErrors(formErrors);

    if (Object.values(formErrors).some(error => error !== '')) {
      return;
    }
    // If no errors, proceed to call backend
    if (Object.keys(formErrors).length === 0) {
      // Example of calling backend API
      try {
        const response = await axios.post('http://localhost:5010/api/Authentication/login', formData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        alert('Login successful!');

        console.log(response);
        if(response.status === 200)
        {
          navigate('/landingpage')
        }
      } catch (error) {
        if (error.response) {
          console.error('Registration failed:', error.response.data);
          alert('Registration failed. Please try again.');
        } else if (error.request) {
          console.error('No response received:', error.request);
          alert('No response from server. Please try again later.');
        } else {
          console.error('Error during registration:', error.message);
          alert('An error occurred. Please try again later.');
        }
      }
    }
  };

  return (
    <div className='loginpage-wrapper'>
      <div className="loginpage-container p-5">
        <Row className='align-items-center justify-content-center'>
          <Col xs={12} lg={5} className='d-flex justify-content-center'>
            <Lottie options={options} />
          </Col>
          <Col xs={12} lg={4}>
            <Form className='loginform-container p-4' onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                  type="email" 
                  name='email'
                  placeholder="Enter email" 
                  value={formData.email} 
                  // onChange={(e) => setEmail(e.target.value)} 
                  onChange={handleInputChange} 
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
                <Form.Control.Feedback type="valid">
                  Looks good!
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  type="password" 
                  name='password'
                  placeholder="Password" 
                  value={formData.password} 
                  onChange={handleInputChange} 
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
                <Form.Control.Feedback type="valid">
                  Looks good!
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Button variant="primary" type="submit" className='w-100'>
                  Submit
                </Button>
              </Form.Group>
              <Form.Group className="mb-3">
                <Button variant="primary" className='w-100' as={Link} to={"/register"}>
                  Create Account
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default LoginForm;
