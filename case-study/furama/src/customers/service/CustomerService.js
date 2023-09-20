import axios from "axios"

export const getAll = async () => {
    try{
        const res = await axios.get('http://localhost:8080/customers')
        console.log(res.data);
        return res.data;
    }catch(e){
        console.log(e);
    }
} 
export const getAllCustomerType = async () => {
    try{
        const result = await axios.get("http://localhost:8080/customerType");
        return result.data;
    }catch(e){
        console.log(e);
    }
}
const createCustomer = async (customer) => {
    try{
        await axios.post('http://localhost:8080/customers',customer)
    }catch(e){
        console.log(e);
    }
}
const editCustomer = async (customer) => {
    try{
        await axios.put('http://localhost:8080/customers/'+customer.id,customer)
    }catch(e){
        console.log(e);
    }
}
const deleteCustomer = async (id) => {
    try{
        await axios.delete('http://localhost:8080/customers/'+id)
    }catch(e){
        console.log(e);
    }
}