import axios from "axios"

export const getAll = async (page, limit, searchName) => {
    try{
        const res = await axios.get(`http://localhost:8080/customers?_page=${page}&_limit=${limit}&fullName_like=${searchName}`)
        const data = res.data;
        const record = res.headers.get("x-total-count");
        console.log(res);
        return [data, record, res];
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
export const getById = async (id) => {
    try{
        const result = await axios.get("http://localhost:8080/customers/"+id)
        return result.data
    }catch(e){
        console.log(e);
    }
}
export const createCustomer = async (customer) => {
    try{
        await axios.post('http://localhost:8080/customers',customer)
    }catch(e){
        console.log(e);
    }
}
export const editCustomer = async (customer) => {
    try{
        await axios.put('http://localhost:8080/customers/'+customer.id,customer)
    }catch(e){
        console.log(e);
    }
}
export const deleteCustomer = async (id) => {
    try{
        await axios.delete('http://localhost:8080/customers/'+id)
    }catch(e){
        console.log(e);
    }
}