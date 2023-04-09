import { useState } from "react";
import "./styles.css";

function App() {
  //modify variables and make things interactive
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setTodos((currentTodos) => {
      return [
        ...todos,
        {
          id: crypto.randomUUID(),
          title: newItem,
          completed: false,
        },
      ];
    });

    setNewItem("");
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todos => {
        if (todos.id === id) {
          return {...todos, completed}
        }
        return todos
      })
    })
  }

  function deleteTodos(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }
  

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <lable>New Item</lable>
          {/* onChanges runs everytime a key is clicked */}
          {/* value sets value for input */}
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn btn-primary">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul>
        {todos.length === 0 && 'No todos'}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
                <lable>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={e => toggleTodo(todo.id, e.target.checked)}
                  />
                  {todo.title}
              </lable>
              <button className="btn btn-danger" onClick={() => deleteTodos(todo.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
