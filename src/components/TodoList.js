import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clearAll,
  completeTodo,
  deleteTodo,
  todoUpdated,
} from "../store/todoSlice";

const TodoList = ({ setInputText, setToggleSubmit }) => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);

  const editTodo = (e, todoId) => {
    e.preventDefault();
    const todo = todos.find((todo) => todo.id === todoId);
    setInputText(todo.todo);
    setToggleSubmit(true);
    window.history.pushState(null, "", window.location.href + `${todo.id}`);
    // dispatch(todoUpdated({id: todo.id, todo}))
  };

  const renderedItems = todos.map((todo) => (
    <div
      key={todo.id}
      className="flex flex-row justify-between bg-slate-300 mt-4 mx-4 mb-4 rounded-xl"
    >
      <span
        className={`cursor-pointer flex items-center ml-3 + ${
          todo.completed ? "line-through decoration-white" : ""
        }`}
        onClick={() => dispatch(completeTodo(todo.id))}
      >
        {todo.todo}
      </span>
      <div>
        <button
          type="button"
          onClick={(e) => editTodo(e, todo.id)}
          className="bg-green-400 mx-2 my-2 rounded-xl py-2 px-4 cursor-pointer"
          disabled={todo.completed}
        >
          edit
        </button>
        <button
          onClick={() => dispatch(deleteTodo(todo.id))}
          className="bg-red-400 mx-2 my-2 rounded-xl py-2 px-4 cursor-pointer"
        >
          delete
        </button>
      </div>
    </div>
  ));

  return (
    <div>
      {todos.length > 0 ? (
        <>
          <h2 className="flex justify-center mt-5 text-lg">
            Todos ({todos.length})
          </h2>
          <hr className="my-4"></hr>
        </>
      ) : (
        ""
      )}

      {/* if content is more than max height then it will overflow */}
      <div
        className="render-items"
        style={{
          maxHeight: "500px",
          overflowY: "scroll",
          borderRadius: "10px",
          backgroundColor: "#f3f4f6",
        }}
      >
        {renderedItems}
      </div>

      {todos.length > 0 ? (
        <button
        onClick={() => dispatch(clearAll())}
        className="bg-yellow-400 mx-2 my-2 rounded-xl py-2 px-4 cursor-pointer w-3/4 ml-24 mt-5"
      >
        Clear All
      </button>
      ) : (
        ""
      )}
      
    </div>
  );
};

export default TodoList;
