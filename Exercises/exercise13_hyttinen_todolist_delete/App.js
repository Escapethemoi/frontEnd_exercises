import React, { useState } from 'react';
import './App.css';

const Todolist = () => {
  const [desc, setDesc] = useState({ description: '', date: '' });
  const [todos, setTodos] = useState([]);


  const inputChanged = (event) => {
    setDesc({ ...desc, [event.target.name]: event.target.value });
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, desc]);
  }

  const deleteEntry = (event) => {
    event.preventDefault();
    setTodos(todos.filter((item, index) => parseInt(event.target.id) !== index))
  }

  return (
    <div className="TodoList">
      <form onSubmit={addTodo}>
        <input type="date" name="date" onChange={inputChanged} value={desc.date} />
        <input type="text" placeholder="Description" name="description" onChange={inputChanged} value={desc.description} />
        <input type="submit" value="Add" />
      </form>
      <table>
        <tbody>
          <th>Date</th><th>Description</th><th>Delete</th>
          {
            todos.map((desc, index) =>
              <tr key={index}>
                <td>{desc.date}</td>
                <td>{desc.description}</td>
                <td><button id={index} onClick={deleteEntry}>Delete</button></td>
              </tr>
            )
          }</tbody></table>
    </div>
  );
};

export default Todolist;