// components/IssueColumns.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Col } from 'react-bootstrap';
import IssueColumn from './IssueColumn';

function IssueColumns() {
  const issues = useSelector(state => state.repo.issues);

  if (!issues) {
    return <div>Loading...</div>;
  }

  const todoIssues = issues.filter(issue => issue.state === 'open');
  const inProgressIssues = issues.filter(issue => issue.assignee !== null && issue.state === 'open');
  const doneIssues = issues.filter(issue => issue.state === 'closed');

  console.log("ToDo Issues:", todoIssues);
  console.log("In Progress Issues:", inProgressIssues);
  console.log("Done Issues:", doneIssues);

  return (
    <div className='d-flex mt-4'>
      
      <Col className='text-center m-3 border border-info-subtle rounded-top'>
        <h2>ToDo</h2>
        <IssueColumn column="ToDo" issues={todoIssues} />
      </Col>
      <Col className='text-center m-3 border border-info-subtle rounded-top'>
        <h2>In Progress</h2>
        <IssueColumn column="InProgress" issues={inProgressIssues} />
      </Col>
      <Col className='text-center m-3 border border-info-subtle rounded-top'>
        <h2>Done</h2>
        <IssueColumn column="Done" issues={doneIssues} />
      </Col>
    </div>
  );
}

export default IssueColumns;
