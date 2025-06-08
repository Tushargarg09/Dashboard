import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialTasks = {
  Todo: ['Task 1', 'Task 2'],
  InProgress: ['Task 3'],
  Done: ['Task 4'],
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

    setTasks(prev => ({
      ...prev,
      [source.droppableId]: srcList,
      [destination.droppableId]: destList,
    }));
  };

  return (
    <div className="page">
      <h2>Kanban Board</h2>
      <DragDropContext onDragEnd={onDragEnd}>
        <div style={{ display: 'flex', gap: '20px' }}>
          {Object.keys(tasks).map(column => (
            <Droppable droppableId={column} key={column}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={{ background: '#9e9e9e', padding: 10, width: 200 }}
                >
                  <h4>{column}</h4>
                  {tasks[column].map((task, index) => (
                    <Draggable draggableId={task} index={index} key={task}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{ background: '#fff',color: '#000', marginBottom: 8, padding: 8, ...provided.draggableProps.style }}
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
