import { useEffect, useState } from 'react';
// import '../components/customer.css';
import { deleteCustomer, getAll, getAllByName, getAllCustomerType } from '../service/CustomerService';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Modal from './Modal';
import { TbArrowBigLeftLinesFilled, TbArrowBigRightLinesFilled } from "react-icons/tb";
import { FaRegGem } from "react-icons/fa";

function Customer() {
    const [customer, setCustomer] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState()
    const [searchName, setSearchName] = useState("");
    const [searchType, setSearchType] = useState("");
    const [type, setType] = useState([])
    const [modal, setModal] = useState({
        show: false,
        data: null
    });

    const loadType = async () => {
        const res = await getAllCustomerType()
        setType(res)
    }
    useEffect(() => {
        loadType()
    },[])
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
    }, [searchName, searchType,page])

    const getCustomer = async () => {
        const res = await getAllByName(searchName, searchType,page);
        console.log(res);
        setTotalPage(res.totalPages)
        setCustomer(res.content)
    }
    const nextPage = () => {
        if (page < totalPage - 1) {
            setPage((prev) => prev + 1)
        }
    }
    const previosPage = () => {
        if (page > 0) {
            setPage((prev) => prev - 1)
        }
    }
    // const handleSearch = async () => {
    //     const search = document.getElementById("search").value
    //     const typeSearch = document.getElementById("typeSearch").value
    //     setSearchName(search)
    //     setSearchType(typeSearch)
    //     setPage(0)
    // }

    return (
        <div className="container" style={{ marginTop: "2rem" }}>
            <h2 style={{ textAlign: "center" }}>Customers List</h2>
            <div>
                <input onChange={(event) => setSearchName(event.target.value)} placeholder="SEARCH" style={{ width: "20%" }} />
                {/* <button className="btn btn-primary" onClick={handleSearch}>Search</button> */}
                <select onChange={(even) => setSearchType(even.target.value)}>
                    <option value="">---</option>
                    {
                        type.map((ty) => (
                            <option value={ty.id}>{ty.name}</option>
                        ))
                    }
                </select>
            </div>
            <div>
                <Link to="/create-customers" className='float-end' style={{ scale: "1.8" }}><FaRegGem /></Link>
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
                                    <td>{s.gender ? "nam" : "nữ"}</td>
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