import { useState } from "react";
import * as CustomerService from "../../service/CustomerService";
import { useEffect } from "react";
import ModalDelete from "../modal/ModalDelete";
import { Link } from "react-router-dom";
import { getCustomerType } from "../../service/CustomerType";
const CustomerList = () => {
    //customer
    const [customerList, setCustomerList] = useState([]);
    //modal
    const [modal, SetModal] = useState({
        show: false,
        info: {},
    });
    //search
    const [searchName, setSearchName] = useState("");
    const [searchType, setSearchType] = useState("");
    const [customerType, setCustomerType] = useState([]);
    //page
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState();
    //loadCustomerType
    const loadCustomerType = async () => {
        const respon = await getCustomerType();
        setCustomerType(respon);
    }
    useEffect(() => {
        loadCustomerType()
    }, [])
    // list and page
    const loadCustomerList = async () => {
        const result = await CustomerService.getCustomerList(page, searchName, searchType);
        setTotalPage(result.totalPages);
        setCustomerList(result.content);
    };
    useEffect(() => {
        loadCustomerList();
    }, [page, searchName, searchType]);
    const nextPage = () => {
        if (page < totalPage - 1) {
            setPage((prev) => prev + 1);
        }
    };
    const previosPage = () => {
        if (page > 0) {
            setPage((prev) => prev - 1);
        }
    };
    //delete
    const showModalDelete = (customer) => {
        SetModal({
            show: true,
            info: customer,
        });
    };
    const hideModalDelete = () => {
        SetModal({
            show: false,
            info: {},
        });
    };
    const deleteConfirm = async (id) => {
        await CustomerService.deleteCustomer(id);
        hideModalDelete();
        loadCustomerList(searchName, searchType);
    };
    //search
    const getSearch = () => {
        const nameSearch = document.getElementById("nameSearch").value;
        setSearchName(nameSearch);
        const typeSearch = document.getElementById("typeSearch").value;
        setSearchType(typeSearch);
        setPage(0);
    };
    return (
        <>
            {/* list */}
            <div className="container">
                <div className="table">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row mt-2">
                                <div className="col-md-6">
                                    <h2>Customer list</h2>
                                </div>
                                <div className="search-box col-md-5">
                                    <div className="input-group">
                                        <div>
                                            <select
                                                id="typeSearch"
                                                class="form-select"
                                                aria-label="Default select example"
                                            >
                                                {customerType.map((customerType) => (
                                                    <option value={customerType.id}>{customerType.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="form-outline">
                                            <input
                                                type="search"
                                                id="nameSearch"
                                                className="form-control"
                                                placeholder="Search Name"
                                            />
                                        </div>
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={() => getSearch()}
                                        >
                                            <i class="fas fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="col-md-1">
                                    <Link to={"/customer/create"}>
                                        <button type="button" className="btn btn-primary">
                                            Add
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <table className="table table-striped table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Date Of Birth</th>
                                    <th>Gender</th>
                                    <th>Identity Card Number</th>
                                    <th>Number Phone</th>
                                    <th>Customer Type</th>
                                    <th>Location</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customerList.map((customer, index) => (
                                    <tr key={customer.id}>
                                        <td>{index + 1}</td>
                                        <td>{customer.name}</td>
                                        <td>{customer.dob}</td>
                                        <td>{customer.gender ? "Male" : "Female"}</td>
                                        <td>{customer.identity}</td>
                                        <td>{customer.phone}</td>
                                        <td>{customer.customerType.name}</td>
                                        <td>{customer.location}</td>
                                        <td>
                                            <Link to={`/customer/edit/${customer.id}`}>
                                                <button type="button" className="btn btn-warning">
                                                    Edit
                                                </button>
                                            </Link>
                                        </td>
                                        <td>
                                            <button
                                                type="button"
                                                className="btn btn-danger"
                                                onClick={() => showModalDelete(customer)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <ModalDelete
                            showModal={modal}
                            hideModal={hideModalDelete}
                            confirm={deleteConfirm}
                        ></ModalDelete>
                        {/* //phantrang */}
                        <div className="d-flex justify-content-center">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <button
                                            className="page-link"
                                            onClick={() => previosPage()}
                                            style={{ color: "black" }}
                                        >
                                            Previous
                                        </button>
                                    </li>
                                    <li className="page-item">
                                        <span
                                            className="page-link"
                                            href="#"
                                            style={{ color: "black" }}
                                        >
                                            {page + 1}/{totalPage}
                                        </span>
                                    </li>
                                    <li className="page-item">
                                        <button
                                            className="page-link"
                                            onClick={() => nextPage()}
                                            href="#"
                                            style={{ color: "black" }}
                                        >
                                            Next
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        {/* // */}
                    </div>
                </div>
            </div>
            {/* list */}
        </>
    );
};
export default CustomerList;