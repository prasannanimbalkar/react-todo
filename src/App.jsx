import { useState } from 'react'
import './styles.css'

function App() {

  //modify variables and make things interactive
  const [newItem, setNewItem] = useState('')
  const [todos, setTodos] = useState([])


  function handleSubmit(e) {
    e.preventDefault()

    setTodos(currentTodos => {
      return [
        ...todos, {
          id: crypto.randomUUID(),
          title: newItem,
          completed: false
        }
      ]
    })

    setNewItem('')
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
              onChange={e => setNewItem(e.target.value) }
              type="text"
              id="item" />
        </div>
        <button className="btn btn-primary">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.map(todo => {
          return( <li key={todo.id}>
              <lable>
                <input type="checkbox"  checked={todo.completed}/>
                {todo.title}
              </lable>
              <button className="btn btn-danger">Delete</button>
            </li>)
        })}
      </ul>
    </>
  )
}

export default App
