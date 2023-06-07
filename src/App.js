import { useState } from "react";
import "./App.css";

function App() {
  // const arr = [25, 45, 546, 5646, 3];
  // const arr = [
  //   { id: 1, name: "a" },
  //   { id: 2, name: "b" },
  // ];
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editTodo = todos.find((i) => i.id === editId.id);
      const updatedTodos = todos.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, todo })
          : { id: t.id, todo: t.todo }
      );
      setTodos(updatedTodos);
      setEditId(0);
      setTodo("");
      return;
    }

    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      setTodo("");
    }
  };

  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((i) => i.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  };

  return (
    <>
      {/* <div className="App">
      {arr.map((num) => (
        <div>{num},</div>
      ))}
    </div> */}
      {/* <div className="App">{arr.filter((num) => num !== 3)}</div> */}
      {/* <div className="App">
      {arr.map((num) => (
        <div key={num.id}>{num.name}</div>
      ))}
    </div> */}

      <div className="App">
        <div className="container">
          <h1>Todo List App</h1>
          <form action="" className="todoForm" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="enter task"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit">{editId ? "Edit" : "Go"}</button>
          </form>
          <ul className="allTodos">
            {todos.map((t) => (
              <li className="singleTodo">
                <span className="todoText" key={t.id}>
                  {t.todo}
                </span>
                <button onClick={() => handleEdit(t.id)}>Edit</button>
                <button onClick={() => handleDelete(t.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
export default App;
