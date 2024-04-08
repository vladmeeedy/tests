// components/RepoForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { fetchRepoIssues } from '../redux/repoSlice';

function RepoForm() {
  const [repoUrl, setRepoUrl] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchRepoIssues(repoUrl));
  };

  return (
    <Form onSubmit={handleSubmit}>
        <div class='d-flex justify-content-start'>
            <Form.Group controlId="repoUrl" className='w-100 p-3'>
        <Form.Label>Repo URL</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter repo url"
          value={repoUrl}
          onChange={(e) => setRepoUrl(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary mt-5 mb-3" type="submit">
        Load
      </Button>
        </div>
      
    </Form>



  );
}

export default RepoForm;
