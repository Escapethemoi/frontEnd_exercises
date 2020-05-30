import React, { useState } from 'react';
import './App.css';
// import Todotable from './components/Todolist';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

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

  const columns = [
    {
      Header: 'Date',
      accessor:'date'
    },
    {
      Header: 'Description',
      accessor: 'description'
    },
    {
      Cell: ({index}) => <button id={index} onClick={deleteEntry}>Delete</button>,
    }
  ]

  return (
    <div className="TodoList">
      <form onSubmit={addTodo}>
        <input type="date" name="date" onChange={inputChanged} value={desc.date} />
        <input type="text" placeholder="Description" name="description" onChange={inputChanged} value={desc.description} />
        <input type="submit" value="Add" />
      </form>
      <ReactTable data={todos} columns={columns} />
    </div>
  );
};

export default Todolist;