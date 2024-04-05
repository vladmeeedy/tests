// IssueBoard.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Issue } from '../redux/types';
import Column from './Column.tsx';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

const IssueBoard: React.FC = () => {
  const issues = useSelector((state: RootState) => state.repo.issues);

  const onDragEnd = (result: DropResult) => {
    // Handle drag end event here
    // For example, you can reorder items in the state based on the result
  };

  const todoIssues = issues.filter((issue: Issue) => issue.state === 'open' && !issue.assignee);
  const inProgressIssues = issues.filter(
    (issue: Issue) => issue.state === 'open' && issue.assignee,
  );
  const doneIssues = issues.filter((issue: Issue) => issue.state === 'closed');

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="d-flex">
        <Column title="ToDo" issues={todoIssues} />
        <Column title="In Progress" issues={inProgressIssues} />
        <Column title="Done" issues={doneIssues} />
      </div>
    </DragDropContext>
  );
};

export default IssueBoard;
