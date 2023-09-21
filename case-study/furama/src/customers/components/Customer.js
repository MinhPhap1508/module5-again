import { useEffect, useState } from 'react';
import '../components/customer.css';
import { deleteCustomer, getAll } from '../service/CustomerService';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Customer() {
    const [customer, setCustomer] = useState([]);
    useEffect(() => {
        getCustomer()
    }, [])
    const getCustomer = async () => {
        const res = await getAll();
        setCustomer(res);
    }
    const removeCustomer = async (id) => {
        await deleteCustomer(id)
        getCustomer();
        toast("done")
    }

    return (
        <div className="container-fuild">
            <div className="table-function">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Birth of day</th>
                            <th>Gender</th>
                            <th>Identity</th>
                            <th>Number Phone</th>
                            <th>Email</th>
                            <th>Kind of customer</th>
                            <th>Address</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customer.map((s) => {
                            return (
                                <tr key={s.id}>
                                    <td>{s.fullName}</td>
                                    <td>{s.dateOfBirth}</td>
                                    <td>{s.gender}</td>
                                    <td>{s.idCard}</td>
                                    <td>{s.phoneNumber}</td>
                                    <td>{s.email}</td>
                                    <td>{s.customerType.name}</td>
                                    <td>{s.address}</td>
                                    <td>
                                        <Link className='btn btn-warning'>Edit</Link>
                                    </td>
                                    <td>
                                        <button className='btn btn-danger' onClick={() => removeCustomer(s.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody></table>
            </div>
        </div>


    )
}
export default Customer;