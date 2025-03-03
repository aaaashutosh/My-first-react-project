import React, { useState } from 'react';

export const AddTodo = (props) => {
  const [title, setTitle] = useState('');
  const [description, setDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Title or Description cannot be blank");
      return;
    }
    props.addTodo(title, description);
    setTitle('');
    setDesc('');
  }

  return (
    <div className="container my-3">
      <h3>Add a Task:</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Task Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            placeholder='Add title'
            id="title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDesc(e.target.value)}
            className="form-control"
            id="desc"
            placeholder='Add task description'
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">Add Task</button>
      </form>
    </div>
  );
};
