import React, { useState } from 'react';
import registrationLottie from "../../assets/FormsAssets/signUpLottie.json";
import Lottie from 'react-lottie';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NAME_REGEX = /^[a-zA-Z\s]+$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/;

const RegisterForm = () => {
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState({});

  const options = {
    loop: true,
    autoplay: true,
    animationData: registrationLottie,
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
      case 'firstName':
        if (value.trim() === '') {
          errorMsg = 'First name is required.';
        } else if (!NAME_REGEX.test(value)) {
          errorMsg = 'First name must not contain special characters or numbers.';
        } else {
          isValid = true;
        }
        break;
      case 'lastName':
        if (value.trim() === '') {
          errorMsg = 'Last name is required.';
        } else if (!NAME_REGEX.test(value)) {
          errorMsg = 'Last name must not contain special characters or numbers.';
        } else {
          isValid = true;
        }
        break;
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
      case 'confirmPassword':
        if (value.trim() === '') {
          errorMsg = 'Please confirm your password.';
        } else if (value !== formData.password) {
          errorMsg = 'Passwords do not match.';
        } else {
          isValid = true;
        }
        break;
      default:
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

    // Validate all fields before submission
    const newErrors = {};
    const newValid = {};

    Object.keys(formData).forEach((field) => {
      const value = formData[field];
      let errorMsg = '';
      let isValid = false;

      switch (field) {
        case 'firstName':
          if (value.trim() === '') {
            errorMsg = 'First name is required.';
          } else if (!NAME_REGEX.test(value)) {
            errorMsg = 'First name must not contain special characters or numbers.';
          } else {
            isValid = true;
          }
          break;
        case 'lastName':
          if (value.trim() === '') {
            errorMsg = 'Last name is required.';
          } else if (!NAME_REGEX.test(value)) {
            errorMsg = 'Last name must not contain special characters or numbers.';
          } else {
            isValid = true;
          }
          break;
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
        case 'confirmPassword':
          if (value.trim() === '') {
            errorMsg = 'Please confirm your password.';
          } else if (value !== formData.password) {
            errorMsg = 'Passwords do not match.';
          } else {
            isValid = true;
          }
          break;
        default:
          break;
      }

      newErrors[field] = errorMsg;
      newValid[field] = isValid;
    });

    setErrors(newErrors);
    setValid(newValid);

    if (Object.values(newErrors).some(error => error !== '')) {
      return;
    }

    try {
      const response = await axios.post('http://localhost:5010/api/Authentication/register', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      alert('Registration successful!');
      navigate('/login')
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
  };

  return (
    <div className='d-flex justify-content-center align-items-center min-vh-100 p-4 bg-light'>
      <div className="bg-white p-4 rounded shadow w-100" style={{ maxWidth: '1200px' }}>
        <Row className='align-items-center'>
          <Col xs={12} lg={6} className='d-flex justify-content-center mb-4 mb-lg-0'>
            <Lottie options={options} />
          </Col>
          <Col xs={12} lg={6}>
            <Form className='p-3 registrationForm' onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter first name" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  isInvalid={!!errors.firstName}
                  isValid={valid.firstName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.firstName}
                </Form.Control.Feedback>
                <Form.Control.Feedback type="valid">
                  Looks good!
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter last name" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  isInvalid={!!errors.lastName}
                  isValid={valid.lastName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.lastName}
                </Form.Control.Feedback>
                <Form.Control.Feedback type="valid">
                  Looks good!
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Enter email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  isInvalid={!!errors.email}
                  isValid={valid.email}
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
                  placeholder="Password" 
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  isInvalid={!!errors.password}
                  isValid={valid.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
                <Form.Control.Feedback type="valid">
                  Looks good!
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control 
                  type="password" 
                  placeholder="Confirm Password" 
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  isInvalid={!!errors.confirmPassword}
                  isValid={valid.confirmPassword}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.confirmPassword}
                </Form.Control.Feedback>
                <Form.Control.Feedback type="valid">
                  Looks good!
                </Form.Control.Feedback>
              </Form.Group>

              <Button variant="primary" type="submit" className='w-100'>
                Register
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default RegisterForm;