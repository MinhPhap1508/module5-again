import { useEffect, useState } from 'react';
// import '../components/customer.css';
import { deleteCustomer, getAll } from '../service/CustomerService';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Modal from './Modal';
import { TbArrowBigLeftLinesFilled, TbArrowBigRightLinesFilled } from "react-icons/tb";
import { FaRegGem } from "react-icons/fa";

function Customer() {
    const [customer, setCustomer] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    // const [record, setRecord] = useState();
    const limit = 2;
    const [totalPage, setTotalPage] = useState()
    const [searchName, setSearchName] = useState("");
    const [refesh, setRefesh] = useState(true);
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
        getCustomer(currentPage, searchName)
    }, [refesh, searchName ])
    const getCustomer = async (page, searchName) => {
        const res = await getAll(page, limit, searchName);
        console.log("list" + res);
        setCustomer(res[0]);
        // setRecord(res[1]);
        setTotalPage(Math.ceil(res[1] / limit));
    }
    const nextPage = () => {
        if (currentPage < totalPage) {
            setCurrentPage(currentPage + 1)
            setRefesh(!refesh)
        }
    }
    const previosPage = () => {
        setCurrentPage(currentPage - 1)
        setRefesh(!refesh)
    }
    const handleSearch = async () => {
        setCurrentPage(1);
        getCustomer(currentPage, searchName)
        setRefesh(!refesh)
    }

    return (
        <div className="container" style={{ marginTop: "2rem" }}>
            <h2 style={{ textAlign: "center" }}>Customers List</h2>
            <div>
                <input onChange={(event) => setSearchName(event.target.value)} placeholder="SEARCH" style={{width:"20%"}} />
                <button className="btn btn-primary" onClick={handleSearch}>Search</button>
            </div>
            <div>
                <Link to="/create-customers" className='float-end' style={{scale:"1.8"}}><FaRegGem/></Link>
            </div>
            <div className="table-function" style={{ marginTop: "2rem" }}>
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
                    </tbody>
                    
                    <div style={{ whiteSpace: 'nowrap' }}>
                    <div style={{ display: 'inline-block', marginRight: '10px' }}>
                        <button onClick={() => previosPage()} className={`btn btn-primary ${currentPage <= 1 ? "disabled" : ""}`}>
                            <TbArrowBigLeftLinesFilled/>
                        </button>
                    </div>
                    <div style={{ display: 'inline-block' }}>
                        <button onClick={() => nextPage()} className={`btn btn-primary ${currentPage >= totalPage ? "disabled" : ""}`}>
                            <TbArrowBigRightLinesFilled/>
                        </button>
                    </div>
                </div>
                    
                    </table>

                

                {/* modal */}
                {
                    modal.show && (

                        <Modal
                            title={"Furama"}
                            msg={`Do you want delete ${modal.data.fullName}?`}
                            onClose={handleCloseModal}
                            onConfirm={() => { handleRemove(modal.data.id) }}
                        >

                        </Modal>

                    )
                }



                {/* page */}

            </div>
        </div>


    )
}
export default Customer;