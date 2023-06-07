import React from "react";

const Todos = (props) => {
  return (
    <>
      <ul className="allTodos">
        {props.todos.map((t) => (
          <li className="singleTodo" key={t.id}>
            <span className="todoText">{t.todo}</span>
            <button onClick={() => props.handleEdit(t.id)}>Edit</button>
            <button onClick={() => props.handleDelete(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todos;
