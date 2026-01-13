import { useState } from "react"


function App() {
  const [text, setText] = useState("")
  const [todos, setTodos] = useState([])
  const [deleteTodos, setDeleteTodos] = useState([])
  
  const addTodo = () => {
    setTodos([...todos, {id: Date.now(), text}])
    setText("")
  }

  const deleteTodo = (todo) => {
    setTodos(todos.filter((t) => t.id !== todo.id))
    setDeleteTodos([...deleteTodos, todo])
  }

  const undoTodo = (todo) => {
    setDeleteTodos(deleteTodos.filter((t) => t.id !== todo.id))
    setTodos([...todos, todo])
  }

  return (
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={addTodo}>Add</button>

        <div>
          <h2>Todo List</h2>

          {todos.map((todo) => (
            <ul>
              <li key={todo.id}>{todo.text}</li>
              <button onClick={() => deleteTodo(todo)}>Delete</button>
            </ul>
          ))}
        </div>

        <div>
          <h2>Deleted Todo List</h2>

          {deleteTodos.map((todo) => (
            <ul>
              <li key={todo.id}>{todo.text}</li>
              <button onClick={() => undoTodo(todo)}>Undo</button>
            </ul>
          ))}
        </div>
      </div>
  )
}

export default App