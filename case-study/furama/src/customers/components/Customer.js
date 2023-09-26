import { useEffect, useState } from 'react';
// import '../components/customer.css';
import { deleteCustomer, getAll } from '../service/CustomerService';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Modal from './Modal';

function Customer() {
    const [customer, setCustomer] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState()
    const [modal, setModal] = useState({
        show: false,
        data: null
    });
    const handleCloseModal = () => {
        setModal({
            show: false,
            data: null
        })
    }
    const handleRemove = async (id) => {
        await deleteCustomer(id)
        getCustomer()
        handleCloseModal()
        toast("Delete Successfully")
    }
    useEffect(() => {
        getCustomer()
    }, [])
    const getCustomer = async () => {
        const res = await getAll();
        setCustomer(res);
    }
    const nextPage = () => {
        if (page < totalPage) {
            setPage((prev) => prev + 1)
        }
    }
    const previosPage = () => {
        if (page > 0) {
            setPage((prev) => prev - 1)

        }
    }

    return (
        <div className="container"  style={{marginTop:"2rem"}}>
            <h2 style={{textAlign:"center"}}>Customers List</h2>
            <div className="table-function" style={{marginTop:"2rem"}}>
                <table className='table table-striped table-hover' style={{ marginBottom: "10rem" }}>
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
                                        <Link className='btn btn-warning' to={`/edit-customers/${s.id}`}>Edit</Link>
                                    </td>
                                    <td>
                                        <button className='btn btn-danger' onClick={() => setModal({
                                            show: true,
                                            data: s
                                        })}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody></table>
                {/* modal */}
                {
                    modal.show && (

                            <Modal
                            title={"Furama"}
                            msg={`Do you want delete ${modal.data.fullName}?`}
                            onClose={handleCloseModal}
                            onConfirm={() => {handleRemove(modal.data.id)}}
                            >
                                
                            </Modal>

                    )
                }



                {/* page */}
                <div className="d-flex justify-content-center">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item">
                                <button className="page-link" onClick={() => (previosPage())} style={{ color: "black" }}>
                                    Previous
                                </button>
                            </li>
                            <li className="page-item">
                                <span className="page-link" href="#" style={{ color: "black" }}>
                                    {page + 1}/{totalPage}
                                </span>
                            </li>
                            <li className="page-item">
                                <button className="page-link" onClick={() => nextPage()
                                } href="#" style={{ color: "black" }}>
                                    Next
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>


    )
}
export default Customer;