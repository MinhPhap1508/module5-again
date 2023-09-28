import axios from "axios"

export const getAll = async () => {
    try{
        const res = await axios.get('http://localhost:8080/contract')
        return res.data
    }catch(e){
        console.log(e);
    }
}
export const createContract = async (contract) => {
    try{
        await axios.post('http://localhost:8080/contract', contract)
    }catch(e){
        console.log(e);
    }
}
export const editContract = async (contract) => {
    try{
        await axios.put("http://localhost:8080/contract/"+contract.id,contract)
    }catch(e){
        console.log(e);
    }
}
export const getById = async (id) => {
    try{
        const res = await axios.get("http://localhost:8080/contract/"+id)
        return res.data;
    }catch(e){
        console.log(e);
    }
}