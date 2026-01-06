import { useState } from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Todo from "./Pages/Todo"
import DeleteTodo from "./Pages/DeleteTodo"


function App() {
  const [todos, setTodos] = useState([])
  const [deleteTodos, setDeleteTodos] = useState([])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todo todos={todos} setTodos={setTodos} setDeleteTodos={setDeleteTodos} />} />
        <Route path="/deleted" element={<DeleteTodo deleteTodos={deleteTodos} setTodos={setTodos} setDeleteTodos={setDeleteTodos} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
