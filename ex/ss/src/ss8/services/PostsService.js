import axios from "axios"

export const getAll = async () => {
    try{
        const res = await axios.get("http://localhost:8080/posts");
        return res.data
    }catch(e){
        alert("Không có dữ liệu")
    }
}
export const createPosts = async(posts) => {
    try{
        await axios.post("http://localhost:8080/posts",posts);
    }catch(e){
        console.log(e);
    }
}