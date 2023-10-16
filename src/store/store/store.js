import { createStore } from "redux";
import {TodoReducer} from "../reducer/todo.reducer";    

let store = createStore(TodoReducer)

export default store;