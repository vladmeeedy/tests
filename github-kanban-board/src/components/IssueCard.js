// components/IssueCard.js
import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

function IssueCard({ issue }) {
 

  return (
    <Card className='m-3'>
      <Card.Body>
        <Card.Title className='fs-6'>{issue.title}</Card.Title>
        {/* <Card.Text>{issue.body}</Card.Text> */}
      </Card.Body>
    </Card>
  );
}

export default IssueCard;
