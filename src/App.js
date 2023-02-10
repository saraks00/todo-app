import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Todos from './components/Todos';
import {useState} from 'react'

const todoStart = [
  {
    id: 0,
    title: "Lage middag",
    content: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
  }
]

function App() {
  const [todo, setTodo] = useState({title: "", content: ""})
  const [todos, setTodos] = useState([...todoStart])
  const [id, setId] = useState(1)

  const addToDo = (event) =>{
    const inputName = event.target.name
    const inputvalue = event.target.value
    setTodo((prev) => ({...prev, [inputName]: inputvalue}))
  }

  const handleClick = () =>{
    setId((prev) => prev + 1)
    setTodos((prev) => [
      {id, title: todo.title, content: todo.content}, ...prev
    ])
  }

  const removeToDos = (todoid) =>{
    setTodos(todos.filter((item) => item.id !== todoid))
  }

  return (
    <>
    <Navbar username="skstensr"/>
    <section className='container'>
      <Form handleClick={handleClick} addToDo={addToDo} todo={todo}/>
    </section>
    
    <Todos todoStart={todos} removeToDos={removeToDos}/>
    </>
  );
}

export default App;
