// components/IssueColumn.js
import React from 'react';
import IssueCard from './IssueCard';
import { ListGroup } from 'react-bootstrap';

function IssueColumn({ column, issues }) {
  return (
    
      <ListGroup className=''>
        {issues.map((issue) => (
          <IssueCard key={issue.id} issue={issue} />
        ))}
      </ListGroup>
  );
}

export default IssueColumn;
