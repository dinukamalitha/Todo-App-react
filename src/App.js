import React, {useState, useEffect} from "react";
import './App.css';

//import components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App(key) {
    //State
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //USE EFFECT

  //Run only once when app Starting
  useEffect(() => {
      getLocalTodos();
  }, []);

  useEffect(() => {
      filterHandler();
      saveLocalTodos();
  }, [todos, status]);
  //functions
  const filterHandler = () => {
      switch (status){
          case "completed":
              setFilteredTodos(todos.filter(todo => todo.completed === true));
              break;
          case "uncompleted":
              setFilteredTodos(todos.filter(todo => todo.completed === false));
              break;
          default:
              setFilteredTodos(todos);
      }
  };

  //Save to local storage
  const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
  };

    const getLocalTodos = key => {
        if (localStorage.getItem("todos") === null){
            localStorage.setItem("todos", JSON.stringify([]));
        }
        else{
            let todoLocal = JSON.parse(localStorage.getItem("todos"));
            //console.log(todoLocal);
            setTodos(todoLocal);
        }
    }

  return (
    <div className="App">
      <header>
          <h1>My Todo List</h1>
      </header>
      <Form
          inputText={inputText}
          todos={todos}
          setTodos={setTodos}
          setInputText={setInputText}
          setStatus={setStatus}
      />
      <TodoList
          filteredTodos={filteredTodos}
          todos={todos}
          setTodos={setTodos}
      />
    </div>
  );
}

export default App;
