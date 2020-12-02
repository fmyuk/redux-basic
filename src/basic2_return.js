const { createStore } = require("redux");

const initState = {
  name: "",
  age: ""
};

function userReducer(state = initState, action) {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.name
      };
    case "SET_AGE":
      return {
        ...state,
        age: action.age
      };
    default:
      return state;
  }
}

const store = createStore(userReducer);

console.log(store.dispatch({ type: "SET_NAME", name: "Taro Yamada" }));
console.log(store.dispatch({ type: "SET_AGE", age: 30 }));
