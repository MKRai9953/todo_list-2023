import React from "react";

const Forms = (props) => {
  return (
    <div>
      <form action="" className="todoForm" onSubmit={props.handleSubmit}>
        <input
          type="text"
          placeholder="enter task"
          value={props.todo}
          onChange={(e) => {
            props.setTodo(e.target.value);
          }}
        />
        <button type="submit">{props.editId ? "Edit" : "Go"}</button>
      </form>
    </div>
  );
};

export default Forms;
