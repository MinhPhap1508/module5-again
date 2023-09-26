
import { createContract } from "../service/ContractService";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function CreateContract() {
  const navigate = useNavigate();
  const addNewContract = async (value) => {
    await createContract(value);
    navigate("/contract")
    toast("Add Contract successfully!")
  }
  return (
    <div className="container">
      <h1>Create Contact</h1>
      <Formik
        initialValues={{
          someContract: "",
          startDate: "",
          endDate: "",
          deposit: "",
          totalPrice: ""
        }}
        validationSchema={Yup.object({
          someContract: Yup.string().required("Some Contract cannot is empty!"),
          startDate: Yup.string().required("Start Date cannot is empty!"),
          endDate: Yup.string().required("End Date cannot is empty!"),
          deposit: Yup.number().required("Deposit cannot is empty").min(1, ("Deposit should more than 0!")),
          totalPrice: Yup.number().required("Total Price cannot is empty").min(1, ("Total price more than 0"))
        })}
        onSubmit={(values) => {
          addNewContract(values)
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
                name="someContract"
                type="text"
                placeholder="Number Contact"
                data-sb-validations=""
              />
              <ErrorMessage className="text-danger" component='span' name="someContract"></ErrorMessage>
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
                name="totalCoast"
                type="text"
                placeholder="Total Coast"
                data-sb-validations=""
              />
              <ErrorMessage className="text-danger" component='span' name="totalCoast"></ErrorMessage>
            </div>
            <div className="d-grid">
              <button
                className="btn btn-primary"
                id="submitButton"
                type="submit"
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
export default CreateContract