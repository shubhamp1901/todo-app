import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: nanoid(), todo: "Going for walk", completed: false },
  { id: nanoid(), todo: "Going for shopping", completed: false },
  { id: nanoid(), todo: "Going for groceries", completed: true },
  { id: nanoid(), todo: "Going to school", completed: false },
  { id: nanoid(), todo: "Going for haircut", completed: false },
  { id: nanoid(), todo: "Going for buying fruits", completed: true },
  { id: nanoid(), todo: "Going to gym", completed: false },
  { id: nanoid(), todo: "Going to pick up medicines", completed: false },
];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.unshift(action.payload);
      },
      prepare(todo) {
        return {
          payload: {
            id: nanoid(),
            todo,
            completed: false,
          },
        };
      },
    },
    deleteTodo(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    completeTodo(state, action) {
      const item = state.find((item) => item.id === action.payload);
      item.completed = !item.completed;
    },
    todoUpdated(state, action) {
      const { id, inputText } = action.payload;
      const existTodo = state.find((todo) => todo.id === id);
      if (existTodo) {
        existTodo.todo = inputText;
      }
    },
    clearAll(state) {
      state.splice(0, state.length)
    }
  },
});

export const { addTodo, deleteTodo, completeTodo, todoUpdated, clearAll } =
  todoSlice.actions;

export default todoSlice.reducer;
