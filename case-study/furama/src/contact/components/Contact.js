import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import { getAll } from '../service/ContractService';
import { Link } from 'react-router-dom';

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
        <div className='container' style={{marginBottom:"10rem"}}>
            <h2>Contact List</h2>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>Number Contact</th>
                        <th>Start Date</th>
                        <th>End date</th>
                        <th>Deposit</th>
                        <th>Total Coast</th>
                        <th>Actions</th>
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
                                    <td>
                                        <Link to={`/contract/edit/${con.id}`}>Edit</Link>
                                    </td>
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