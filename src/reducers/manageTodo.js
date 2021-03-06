import uuid from "uuid";

export default function manageTodo(
  state = {
    todos: [],
  },
  action
) {
  switch (action.type) {
    case "ADD_TODO":
      const todo = {
        id: uuid(),
        text: action.payload.text,
      };
      return { todos: [...state.todos, todo] };
    case "DELETE_TODO":
      console.log(action);
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
}
