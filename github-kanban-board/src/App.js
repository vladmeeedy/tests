// App.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RepoForm from './components/RepoForm';
import IssueColumns from './components/IssueColumns';

function App() {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h1>GitHub Issue Tracker</h1>
          <RepoForm />
        </Col>
      </Row>
      <Row className='mt-5'>
        URL
      </Row>
      <Row className="mt-3">
        <IssueColumns />
      </Row>
    </Container>
  );
}

export default App;
