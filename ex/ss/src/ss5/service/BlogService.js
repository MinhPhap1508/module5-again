import axios from "axios"

export const getAll = async () => {
    try{
        const res = await axios.get('http://localhost:8080/posts')
        return res.data
    }catch(e){
        console.log(e);
    }
}
export const addBlog = async (blog) => {
    try{
        await axios.post('http://localhost:8080/posts', blog)
    }catch(e){
        console.log(e);
    }
}
export const editBlog = async (blog) => {
    try{
        await axios.put(`http://localhost:8080/posts/${blog.id}`, blog)
    }catch(e){
        console.log(e);
    }
}
export const getById = async (id) =>{
    try{
        const res = (await axios.get(`http://localhost:8080/posts/${id}`))
        return res.data;
    }catch(e){
        console.log(e);
    }
}
export const deleteBlog = async (id) => {
    try{
        await axios.delete('http://localhost:8080/posts/'+id)
    }catch(e){
        console.log(e);
    }
}