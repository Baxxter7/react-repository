import {useState} from 'react'

export function TaskForm({createTask}) {
  const [title, setTitle] = useState('')  

  const handleSubmit = (e) =>{
    e.preventDefault(); //Para modificar el comportamiento por defecto del navegador
    const newTask = {
      title
    }
    createTask(newTask);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribe tu tarea"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button>Guardar</button>
    </form>
  );
}
