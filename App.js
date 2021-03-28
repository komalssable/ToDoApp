import React,{ useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [todos,setTodos] = useState([])
  const [todo,setTodo] = useState("")
  const [todoEditing,setTodoEditing] = useState(null)
  const [editingText,setEditingText] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    const newTodo = {
      id: new Date().getTime(),
      text: todo
    }
    setTodos([...todos].concat(newTodo))
    setTodo("")
  }  

  function deleteTodo(id) {
    const UpdatedTodos = [...todos].filter(t => t.id !== id)

    setTodos(UpdatedTodos)
  }

  function editTodo(id) {
    const updatedTodos =[...todos].map(t => {
      if(t.id === id) {
        t.text = editingText
      }
      return t
    })
    setTodos(updatedTodos)
    setTodoEditing(null)
    setEditingText("")
  }

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <div className="formClass">
      <form onSubmit={handleSubmit}> 
        <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo} />
        <button type="submit">Add ToDo</button>
      </form>
      </div>
      <br />
      <div className="displayClass">
      {todos.map(t => <div key={t.id}>

        {todoEditing === t.id ? (<input 
          type="text" 
          onChange={(e) => setEditingText(e.target.value)}
          value={editingText}
          />) : 
          (<div>{t.text}</div>)}
        
        

        <button onClick={() => deleteTodo(t.id)}>Delete  </button>
          
          {todoEditing === t.id ? 
          (<button onClick={() => editTodo(t.id)}>
            Submit Edit</button>) 
            : (<button onClick={() => setTodoEditing(t.id)}>
              Edit Todo</button>)}
        
        
        </div>)}
    </div>
    </div>
  );
}

export default App;
