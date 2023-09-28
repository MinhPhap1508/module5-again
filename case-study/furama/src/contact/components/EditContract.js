
import { createContract, editContract, getById } from "../service/ContractService";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

function EditContract() {
    const navigate = useNavigate();
    const [selector, setSelector] = useState(null);
    const param = useParams();
    const getContractById = async () => {
        const res = await getById(param.id)
        setSelector(res)
    }
    const editNewContract = async (value) => {
        await editContract(value);
        navigate("/contract")
        toast("Edit Contract successfully!")
    }
    useEffect(() => {
        getContractById()
    },[param])
    if(selector == null){
        return null
    }
    return (
        <div className="container">
            <h1>Create Contact</h1>
            <Formik
                initialValues={ selector }
                validationSchema={Yup.object({
                    // someContract: Yup.string().required("Some Contract cannot is empty!"),
                    // startDate: Yup.string().required("Start Date cannot is empty!"),
                    // endDate: Yup.string().required("End Date cannot is empty!"),
                    // deposit: Yup.number().required("Deposit cannot is empty").min(1, ("Deposit should more than 0!")),
                    // totalPrice: Yup.number().required("Total Price cannot is empty").min(1, ("Total price more than 0"))
                })}
                onSubmit={(values) => {
                    editNewContract(values)
                }}
            >
                <div className="contract container px-5 my-5">
                    <Form id="contactForm" data-sb-form-api-token="API_TOKEN">
                        <div className="mb-3">
                            <label className="form-label" htmlFor="numberContact">
                                Number Contact
                            </label>
                            <Field
                                className="form-control"
                                id="numberContact"
                                name="someContracts"
                                type="text"
                                placeholder="Number Contact"
                                data-sb-validations=""
                            />
                            <ErrorMessage className="text-danger" component='span' name="someContracts"></ErrorMessage>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="startDate">
                                Start Date
                            </label>
                            <Field
                                className="form-control"
                                name="startDate"
                                id="startDate"
                                type="text"
                                placeholder="Start Date"
                                data-sb-validations=""
                            />
                            <ErrorMessage className="text-danger" component='span' name="startDate"></ErrorMessage>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="endDate">
                                End Date
                            </label>
                            <Field
                                className="form-control"
                                id="endDate"
                                name="endDate"
                                type="text"
                                placeholder="End Date"
                                data-sb-validations=""
                            />
                            <ErrorMessage className="text-danger" component='span' name="endDate"></ErrorMessage>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="deposit">
                                Deposit
                            </label>
                            <Field
                                className="form-control"
                                id="deposit"
                                name="deposit"
                                type="text"
                                placeholder="Deposit"
                                data-sb-validations=""
                            />
                            <ErrorMessage className="text-danger" component='span' name="deposit"></ErrorMessage>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="totalCoast">
                                Total Coast
                            </label>
                            <Field
                                className="form-control"
                                id="totalCoast"
                                name="totalPrice"
                                type="text"
                                placeholder="Total Coast"
                                data-sb-validations=""
                            />
                            <ErrorMessage className="text-danger" component='span' name="totalPrice"></ErrorMessage>
                        </div>
                        <div className="d-grid">
                            <button
                                className="btn btn-primary"
                                id="submitButton"
                                
                            >
                                Submit
                            </button>
                        </div>
                    </Form>
                </div>
            </Formik>

        </div>
    )
}
export default EditContract