import { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {

  const [inputText, setInputText] = useState("");
  const [toggleSubmit, setToggleSubmit] = useState(false)

  return (
    <div className="w-1/2 m-auto my-5">
      <h1 className='text-2xl flex justify-center'>📝 Todo App</h1>
      <TodoInput inputText={inputText} setInputText={setInputText} toggleSubmit={toggleSubmit} setToggleSubmit={setToggleSubmit} />
      <TodoList inputText={inputText} setInputText={setInputText} toggleSubmit={toggleSubmit} setToggleSubmit={setToggleSubmit} />
    </div>
  );
}

export default App;
