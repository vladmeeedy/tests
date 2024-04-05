import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { Issue } from '../redux/types';

interface ColumnProps {
  title: string;
  issues: Issue[];
  onDragEnd: (result: any) => void; // Define a function to handle drag end
}

const Column: React.FC<ColumnProps> = ({ title, issues, onDragEnd }) => {
  return (
    <Card style={{ width: '18rem' }} className="m-3">
      <Card.Body>
        <Card.Title>{title}</Card.Title>

        <Droppable droppableId={title}>
          {(provided) => (
            <ListGroup ref={provided.innerRef} {...provided.droppableProps}>
              {issues.map((issue, index) => (
                <Draggable
                  key={issue.id.toString()}
                  draggableId={issue.id.toString()}
                  index={index}>
                  {(provided) => (
                    <ListGroup.Item
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}>
                      {issue.title}
                    </ListGroup.Item>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ListGroup>
          )}
        </Droppable>
      </Card.Body>
    </Card>
  );
};

export default Column;
