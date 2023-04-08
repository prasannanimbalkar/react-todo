import './styles.css'

function App() {

  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <lable>New Item</lable>
          <input type="text" id="item" />
        </div>
        <button className="btn btn-primary">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul>
        <li >
          <lable>
            <input type="checkbox" />
            Item 1
          </lable>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
      <ul>
        <li >
          <lable>
            <input type="checkbox" />
            Item 2
          </lable>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
      <ul>
        <li >
          <lable>
            <input type="checkbox" />
            Item 3
          </lable>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  )
}

export default App
