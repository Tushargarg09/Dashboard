import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './Kanban.css'; 

const initialTasks = {
  Todo: ['Design login page', 'Set up database'],
  InProgress: ['Create Kanban UI'],
  Done: ['Install dependencies'],
};

function Kanban() {
  const [tasks, setTasks] = useState(initialTasks);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;
    const srcList = [...tasks[source.droppableId]];
    const [movedTask] = srcList.splice(source.index, 1);
    const destList = [...tasks[destination.droppableId]];
    destList.splice(destination.index, 0, movedTask);

    setTasks((prev) => ({
      ...prev,
      [source.droppableId]: srcList,
      [destination.droppableId]: destList,
    }));
  };

  return (
    <div className="page">
      <h2>Kanban Board</h2>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="kanban-board">
          {Object.keys(tasks).map((column) => (
            <Droppable droppableId={column} key={column}>
              {(provided) => (
                <div
                  className="kanban-column"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <h4>{column}</h4>
                  {tasks[column].map((task, index) => (
                    <Draggable draggableId={task} index={index} key={task}>
                      {(provided) => (
                        <div
                          className="kanban-card"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{ ...provided.draggableProps.style }}
                        >
                          {task}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}

export default Kanban;
