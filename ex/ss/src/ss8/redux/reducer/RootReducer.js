import { combineReducers } from "redux";
import postsReducer from "./PostsReducer";

export const rootReducer = combineReducers({
    posts: postsReducer
})