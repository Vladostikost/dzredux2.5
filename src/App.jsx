import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useState } from "react";
import { addTodo, delTodo } from "./redux/redusers/todo";

function App() {
  const dispatch = useDispatch();

  const todos = useSelector((store) => store.todos.todos);

  const [todo, setTodo] = useState("");

  return (
    <div className="App">
      <div className="">
        <input
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="text"
        />
        <button
          onClick={() => dispatch(addTodo(todo), setTodo(""))}
          type="button"
        >
          Add
        </button>

        {todos.map((item, index) => (
          <div key={index}>
            <li>{item.title}</li>
            <button
              onClick={() => dispatch(delTodo(index), setTodo(""))}
              type="button"
            >
              Del
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
