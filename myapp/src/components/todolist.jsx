import React from 'react'
import '../assets/css/todolist.css' ;
import { useState } from 'react';

const TodoList = () => {
  const [todo, setTodo] = useState('Add') ; 
  const [list, setList] = useState([
    {
      id: 1,
      deskripsi: 'Belajar ReactJs'
    }
  ]) ;
  const addTodoHandler = () => {
    const data = {
      id: list.length + 1,
      deskripsi: todo,
    } ;

    setList([...list, data]) ;  
    setTodo('') ;
  };

  const deleteTodoHandler = (id) => {
  const filteredList = list.filter((item) => item.id !== id);
  setList(filteredList);
};

  return (
     <div className="card todo-section">
        <h3>My Tasks</h3>

        <div className="input-group">
          <input
            type="text"
            placeholder="Tulis tugas baru..."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
            <button 
              className="btn btn-primary"
              onClick={addTodoHandler}
            > 
              Add
            </button>  
        </div>

        <ul id="todo-list" className="todo-list">
        {list.map((element, index) => {
          return (
            <li key={element.id}>
              <span>
                <b>{index + 1}. </b> {element.deskripsi}
              </span>

               <button
                onClick={() => deleteTodoHandler(element.id)}
                className="btn btn-error"
                >   
               Delete
               </button>
            </li>
          ) ;
        })}
        </ul> 
      </div>
  )
}

export default TodoList