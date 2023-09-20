import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import { getAll } from '../service/ContractService';

function Contract () {
    const [contract, setContract] = useState([])
    const getContract = async () => {
        const res = await getAll();
        setContract(res)
    }
    useEffect(()=>{
        getContract()
    },[])
    return(
        <>
        <div className='container' style={{top:"12rem",position:"relative"}}>
            <h2>Contact List</h2>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>Number Contact</th>
                        <th>Start Date</th>
                        <th>End date</th>
                        <th>Deposit</th>
                        <th>Total Coast</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contract.map( con => {
                            return(
                                <tr key={con.id}>
                                    <td>{con.someContracts}</td>
                                    <td>{con.startDate}</td>
                                    <td>{con.endDate}</td>
                                    <td>{con.deposit}</td>
                                    <td>{con.totalPrice}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
        </>
    )
}
export default Contract