
import { useState} from "react";

export function TaskList({tasks}) {

  if (tasks.length === 0) {
    return <h1>No hay tareas disponibles</h1>;
  }

  return (
    <> 
      {tasks.map((task, index) => (
        <div key={index}>
          <h1> {task.title} </h1>
          <p>{task.description}</p>
        </div>
      ))}
    </>
  );
}
