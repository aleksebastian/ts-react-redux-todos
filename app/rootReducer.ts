import { combineReducers } from "redux";

import todos from "features/todoList/todoSlice";
import visibilityFilter from "features/visibilityFilter/visibilityFilterSlice";

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
