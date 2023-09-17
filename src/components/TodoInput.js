import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, todoUpdated } from "../store/todoSlice";

const TodoInput = ({inputText, setInputText, toggleSubmit, setToggleSubmit}) => {

  const id_array = window.location.href.split("/")
  const todoId = id_array[id_array.length - 1]
 
  const dispatch = useDispatch()


  const submitHandle = (e) => {
    e.preventDefault()
    if(!inputText) {
        return
    }else if(inputText && toggleSubmit){
        dispatch(todoUpdated({id: todoId, inputText}))
        window.history.back()
    }
    else{
        dispatch(addTodo(inputText))
    }
    setInputText("")
    setToggleSubmit(false)
  }



  return (
    <form onSubmit={submitHandle} className="flex flex-row justify-center">
      <input
        className="border-2 border-solid w-2/3 mt-5 py-2 outline-none pl-4 rounded-l-2xl"
        type="text"
        placeholder="enter todos..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className="bg-blue-400 w-1/6 mt-5 py-2 border-none rounded-r-2xl">{toggleSubmit ? "Edit Todo" : "Add Todo"}</button>
    </form>
  );
};

export default TodoInput;
