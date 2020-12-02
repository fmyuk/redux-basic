const { createStore } = require("redux");

const initState = [];

function todoReducer(state = initState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
        id: action.id,
          text: action.text
        }
      ];
    case "DELETE_TODO":
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}

const store = createStore(todoReducer);
store.subscribe(() => console.log(store.getState()));
console.log("ADD Todo 1");
store.dispatch({ type: "ADD_TODO", id: 1, text: "Todo1" });
console.log("ADD Todo 2");
store.dispatch({ type: "ADD_TODO", id: 2, text: "Todo2" });
console.log("ADD Todo 3");
store.dispatch({ type: "ADD_TODO", id: 2, text: "Todo2" });
console.log("DELETE Todo 2");
store.dispatch({ type: "DELETE_TODO", id: 2 });
