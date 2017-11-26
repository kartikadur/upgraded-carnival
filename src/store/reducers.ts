import * as fromActions from "./actions";

export const initialState = {
  loaded: false,
  loading: false,
  data: [{ label: "Eat Pizza", complete: false }]
};

export function reducer(
  state = initialState,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case fromActions.ADD_TODOS: {
      const todo = action.payload;
      const data = [...state.data, todo];
      return {
        ...state,
        data
      };
    }
    case fromActions.REMOVE_TODOS: {
      const data = state.data.filter(
        todo => todo.label !== action.payload.label
      );
      return {
        ...state,
        data
      };
    }
    default:
      return state;
  }
}
