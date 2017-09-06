const userList = [
  {
    _id: 0,
    title: "Todo App 1",
    description: "This is the first todo",
    status: 1
  },
  {
    _id: 1,
    title: "Todo App 2",
    description: "This is the second todo",
    status: 1
  },
  {
    _id: 2,
    title: "Todo App 3",
    description: "This is the third todo app",
    status: 1
  }
];
function deleteTodo(todoToDelete) {
  const oldTodos = userList;
  oldTodos.forEach(todo => {
    if (todo._id === todoToDelete._id) {
      todo.status = 0;
    }
  });
  return oldTodos;
}

function editTodo(todo) {
  const oldTodos = userList;
  oldTodos.forEach(todoToEdit => {
    if (todoToEdit._id === todo._id) {
      todoToEdit.title = todo.title;
      todoToEdit.description = todo.description;
    }
  });
  return oldTodos;
}
function addTodo(todo) {
  const oldTodos = userList;
  todo._id = oldTodos.length;
  oldTodos.push(todo);
  return oldTodos;
}

export default function(state = userList, action) {
  switch (action.type) {
    case "DELETE_USER":
      return Object.assign([], deleteTodo(action.payload));
    case "EDIT_USER":
      return Object.assign([], editTodo(action.payload));
    case "ADD_USER":
      return Object.assign([], addTodo(action.payload));

    default:
      return state;
  }
}
