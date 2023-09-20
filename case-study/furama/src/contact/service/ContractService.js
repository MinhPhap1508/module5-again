import axios from "axios"

export const getAll = async () => {
    try{
        const res = await axios.get('http://localhost:8080/contract')
        return res.data
    }catch(e){
        console.log(e);
    }
}
export const CreateContract = async (contract) => {
    try{
        await axios.post('http://localhost:8080/contract', contract)
    }catch(e){
        console.log(e);
    }
}