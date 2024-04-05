// App.tsx

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { fetchRepoIssues } from './redux/repoSlice.ts';
import IssueBoard from './components/IssueBoard.tsx';

const App: React.FC = () => {
  const [repoUrl, setRepoUrl] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (repoUrl.trim() !== '') {
      dispatch(fetchRepoIssues(repoUrl));
    }
  };

  return (
    <Container>
      <Row className="mt-3">
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="repoUrl">
              <Form.Label>Enter Repository URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g., https://github.com/facebook/react"
                value={repoUrl}
                onChange={(e) => setRepoUrl(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Load
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <IssueBoard />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
