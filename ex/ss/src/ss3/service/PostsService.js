import axios from 'axios';
export const getAll = async () => {
    try {
        const res = await axios.get('http://localhost:8080/posts')
        return res.data;
    } catch (e) {
        console.log(e);
    }
}
export const addPosts = async (post) => {
    try{
        await axios.post('http://localhost:8080/posts',post);
    }catch(e){
        console.log(e);
    }
}
export const editPosts = async (post) => {
    try{
        await axios.put('http://localhost:8080/posts/'+post.id, post)
    }catch(e){
        console.log(e);
    }
}
export const deletePosts = async (id) => {
    try{
        await axios.delete('http://localhost:8080/posts/'+id)
    }catch(e){
        console.log(e);
    }
}