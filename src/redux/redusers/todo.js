const initialState = {
  todos: [
    {
      id: 1,
      title: "eat",
    },
    {
      id: 2,
      title: "Не eat",
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD": {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            title: action.title,
            id: state.todos.length ? state.todos[state.todos.length - 1].id : 1,
          },
        ],
      };
    }
    case "DEL": {
      // const updatedItems = [...state.todos];
      // updatedItems.splice(action.payload, 1);
      // return { ...state, todos: updatedItems };
      // return ...state, {id.splice(action.payload, 1)}

      const updatedItems = [...state.todos];
      updatedItems.splice(action.payload, 1);
      return { ...state, todos: updatedItems };
    }
    default:
      return state;
  }
};

export const addTodo = (title) => {
  return (dispatch) => {
    return dispatch({ type: "ADD", title });
  };
};

export const delTodo = (id) => {
  return (dispatch) => {
    return dispatch({ type: "DEL", id });
  };
};
