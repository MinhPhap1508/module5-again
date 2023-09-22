import axios from "axios"

export const getAll = async () => {
    try{
        const res = await axios.get("https://my-json-server.typicode.com/sonpham1591996/cg-blogs/posts")
        return res.data;
    }catch(e){
        console.log(e);
    }
}
export const create = async (data) => {
    try{
        await axios.post("https://my-json-server.typicode.com/sonpham1591996/cg-blogs/posts", data)
    }catch(e){
        console.log(e);
    }
}