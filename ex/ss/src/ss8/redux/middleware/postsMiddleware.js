import { CREATE_POSTS,GET_ALL_POSTS} from "../Type";
import { createPosts, getAll } from "../../services/PostsService"

export const getAllPosts = () => async(dispatch) => {
    const res = await getAll();
    dispatch({
        type: GET_ALL_POSTS,
        payload: res
    })
}  

export const addPosts = (value) => async (dispatch) => {
        await createPosts(value);
        dispatch({
            type: CREATE_POSTS,
            payload: value
        })
}