import { CREATE_POSTS, GET_ALL_POSTS } from "../../Type";

const postsReducer = (posts = [], action) => {
    const {type, payload} = action;
    switch(type) {
        case GET_ALL_POSTS: {
            return payload;
        }
        case CREATE_POSTS:  {
            return [...posts, payload];
        };
        default: {
            return posts;
        }
    } 
}
export default postsReducer;