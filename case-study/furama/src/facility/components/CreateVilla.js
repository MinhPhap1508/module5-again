import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { createFacility } from "../service/FacilityService";
import { toast } from "react-toastify";
import * as Yup from 'yup'

export function CreateVilla() {
  const navigate = useNavigate();
  const addVilla = async (value) => {
    await createFacility(value)
    navigate("/")
    toast("Done!")
  }
  return (
    <div>
      <Formik
        initialValues={{
          serviceName: "",
          area: "",
          rentalCost: "",
          maxCapacity: "",
          rentalType: "",
          roomStandaard: "",
          amenities: "",
          poolArea: "",
          floors: "",
          rentalType: "",
          img: ""
        }}
        validationSchema={Yup.object({
          serviceName: Yup.string()
            .required("Service Name cannot is empty")
            .matches(/^[a-zA-Z]{2,}$/, "Service Name Invalid"),
          area: Yup.number()
            .required("Area cannot is empty")
            .min(1, "Area should more than 0!"),
          rentalCost: Yup.string().required("Rental cost cannot is empty"),
          maxCapacity: Yup.string().required("Capacity cannot is empty"),
          // rentalType: Yup.string().required("Rental type cannot is empty"),
          poolArea: Yup.number().required("Pool Area cannot is empty!")
            .min(1, "Pool area > 0 !"),
          floors: Yup.number()
            .required("Floors cannot is empty")
            .min(1, "Floors should geather than 0!")
        })}
        onSubmit={(values) => {
          addVilla(values)
        }}>
        <div className="container px-5 my-5">
          <Form id="contactForm" data-sb-form-api-token="API_TOKEN">
            <div className="form-floating mb-3">

              <Field
                className="form-control"
                id="serviceName"
                name="serviceName"
                type="text"
                placeholder="Service Name"
                data-sb-validations=""
              />
              <ErrorMessage className="text-danger" name="serviceName" component='span'></ErrorMessage>
              <label htmlFor="serviceName">Service Name</label>
            </div>
            <div className="form-floating mb-3">

              <Field
                className="form-control"
                id="area"
                name="area"
                type="text"
                placeholder="Area"
                data-sb-validations=""
              />
              <ErrorMessage className="text-danger" name="area" component='span'></ErrorMessage>
              <label htmlFor="area">Area</label>
            </div>
            <div className="form-floating mb-3">

              <Field
                className="form-control"
                id="rentalCost"
                name="rentalCost"
                type="text"
                placeholder="Rental Cost"
                data-sb-validations=""
              />
              <ErrorMessage className="text-danger" name="rentalCost" component='span'></ErrorMessage>
              <label htmlFor="rentalCost">Rental Cost</label>
            </div>
            <div className="form-floating mb-3">

              <Field
                className="form-control"
                id="capacity"
                name="maxCapacity"
                type="text"
                placeholder="Capacity"
                data-sb-validations=""
              />
              <ErrorMessage className="text-danger" name="maxCapacity" component='span'></ErrorMessage>
              <label htmlFor="capacity">Capacity</label>
            </div>
            <div className="form-floating mb-3">

              <Field
                className="form-control"
                id="roomStandard"
                name="roomStandard"
                type="text"
                placeholder="Room Standard"
                data-sb-validations=""
              />
              <ErrorMessage className="text-danger" name="roomStandard" component='span'></ErrorMessage>
              <label htmlFor="roomStandard">Room Standard</label>
            </div>
            <div className="form-floating mb-3">

              <Field
                className="form-control"
                id="amenities"
                name="amenities"
                type="text"
                placeholder="Amenities"
                data-sb-validations=""
              />
              <ErrorMessage className="text-danger" name="amenities" component='span'></ErrorMessage>
              <label htmlFor="amenities">Amenities</label>
            </div>
            <div className="form-floating mb-3">

              <Field
                className="form-control"
                id="poolArea"
                name="poolArea"
                type="text"
                placeholder="Pool Area"
                data-sb-validations=""
              />
              <ErrorMessage className="text-danger" name="poolArea" component='span'></ErrorMessage>
              <label htmlFor="poolArea">Pool Area</label>
            </div>
            <div className="form-floating mb-3">

              <Field
                className="form-control"
                id="floors"
                name="floors"
                type="text"
                placeholder="Floors"
                data-sb-validations=""
              />
              <ErrorMessage className="text-danger" name="floors" component='span'></ErrorMessage>
              <label htmlFor="floors">Floors</label>
            </div>
            <div className="form-floating mb-3">

              <Field as="select"
                className="form-control"
                id="rentalType"
                name="rentalType"
                data-sb-validations=""
              >  <option className="option" value="">
                  --Choose--
                </option>
                <option className="option" value="date" >
                  Date
                </option>
                <option className="option" value="week">
                  Week
                </option>
                <option className="option" value="month">
                  Month
                </option>
                <option className="option" value="year">
                  Year
                </option></Field>
              <ErrorMessage className="text-danger" name="rentalType" component='span'></ErrorMessage>
              <label htmlFor="rentalType">Rental Type</label>
            </div>
            <div className="form-floating mb-3">

              <Field
                className="form-control"
                id="image"
                name="img"
                type="text"
                placeholder="Image"
                data-sb-validations=""
              />
              <ErrorMessage className="text-danger" name="img" component='span'></ErrorMessage>
              <label htmlFor="image">Image</label>
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