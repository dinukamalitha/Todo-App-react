import React, {useState} from "react";
import './App.css';

//import components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = ("");
  const [todos, setTodos] = ([]);
  return (
    <div className="App">
      <header>
          <h1>My Todo List</h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
      <TodoList/>
    </div>
  );
}

export default App;
