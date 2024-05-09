import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../styles/PostQuery.css'
import { toast } from 'react-toastify';

const PostQuery = () => {
  const navigate = useNavigate();
  // State to store user variables
  const [name, setName] = useState(''); 
  const [age, setAge] = useState(''); 
  const [dietaryGoals, setDietaryGoals] = useState(''); 
  const [query, setQuery] = useState(''); 
  const [errorMessage, setErrorMessage] = useState(''); 
  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'age':
        setAge(value);
        break;
      case 'dietaryGoals':
        setDietaryGoals(value);
        break;
      case 'query':
        setQuery(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    let isValid = true;
    setErrorMessage(''); // Clear any previous error message

    if (name.trim() === '') {
      isValid = false;
      toast.error('Please enter your name.');
    }

    if (age.trim() === '' || isNaN(age)) {
      isValid = false;
      toast.error('Please enter a valid age.');
    }

    if (dietaryGoals.trim() === '') {
      isValid = false;
      toast.error('Please enter your dietary goals.');
    }

    if (query.trim() === '') {
      isValid = false;
      toast.error('Please write your query.');
    }

    if (isValid) {
      // Form validation passed - submit the data (e.g., API call)
      console.log('Form submitted successfully:', { name, age, dietaryGoals, query });
      toast.success("Query Form submitted successfully!")
      // Or navigate to a confirmation page:
      await new Promise((resolve) => setTimeout(resolve, 4500));
      navigate('/experts');
    }
  };

  return (
    <>
    <Box overflow={'hidden'}>
      <Typography variant='h3' textAlign={'center'} marginY={"20px"}>
        Post Your Query Here..
      </Typography>
      <div className="queryForm">
      <form onSubmit={handleSubmit}>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <div>
          <label htmlFor="name">Name :</label>
          <br />
          <input type="text" name="name" id="name" value={name} onChange={handleChange} required autoComplete='off'/>
        </div>
        <div>
          <label htmlFor="age">Age :</label>
          <br />
          <input type="number" name="age" id="age" value={age} onChange={handleChange} autoComplete="off" required />
        </div>
        <div>
          <label htmlFor="dietaryGoals">Your Dietary Goals :</label>
          <br />
          <input type="text" name="dietaryGoals" id="dietaryGoals" value={dietaryGoals} onChange={handleChange} autoComplete="off" required />
        </div>
        <div>
          <label htmlFor="query">Your Query :</label>
          <br />
          <textarea type="text" name="query" id="query" rows={5} cols={65} value={query} onChange={handleChange} placeholder="Please write your query here.." autoComplete="off" required />
        </div>
        <button type="submit">Submit</button>
      </form>
      </div>
      </Box>
    </>
  );
};

export default PostQuery;
