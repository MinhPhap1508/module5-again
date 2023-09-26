import { useNavigate, useParams } from 'react-router-dom';
import '../components/edit.css'
import { editCustomer, getAllCustomerType, getById } from '../service/CustomerService';
import { useEffect, useState } from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { toast } from 'react-toastify';

function EditCustomer() {
  const navigate = useNavigate();
  const [type, setType] = useState([]);
  const [selected, setSelected] = useState(null);
  const param = useParams();
  const getCustomerById = async () => {
    const res = await getById(param.id)
    const newRes = { ...res, customerType: `${JSON.stringify(res.customerType)}` }
    setSelected(newRes)
  }

  const getType = async () => {
    const res = await getAllCustomerType()
    setType(res)
  }
  const loadCustomer = async (value) => {
    await editCustomer(value)
  }
  useEffect(() => {
    getType()
  }, [])
  useEffect(() => {
    if (param) {
      getCustomerById()
    }
  }, [param])
  if (selected === null) {
    return null
  }

  return (
    <div className="body">
      <Formik
        initialValues={selected}
        validationSchema={Yup.object({
          fullName: Yup.string()
            .required("Customer name cannot be blank")
            .matches(/^[A-Z][a-z]*$/, "Name is invalid"),
          dateOfBirth: Yup.string()
            .required("Dob cannot is empty"),
          gender: Yup.string().required("Gender cannot is empty"),
          idCard: Yup.string()
            .required("ID Card cannot is empty")
            .matches(/^\d{9}|\d{12}$/, "Id Card is Invalid"),
          phoneNumber: Yup.string()
            .required("Phone cannot is empty")
            .matches(/^(?:\+?84)?(90|91)\d{7}$/, "Invalid"),
          email: Yup.string()
            .required("Email cannot is empty")
            .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid"),
          address: Yup.string()
            .required("Address cannot is empty!")
        })}
        onSubmit={(values) => {
          const newValues = { ...values, customerType: JSON.parse(values.customerType) }
          loadCustomer(newValues)
          navigate("/customers")
          toast("Edited successfully!")
        }}
      >
        <div className="form">
          <div className="form-header">Edit customer</div>
          <Form className="create__form">
            <div className="form__input-content">
              <div className="div">
                <label htmlFor="name">Customer Name</label>
                <Field type="text" className="form__input" id="name" name="fullName" />
                <ErrorMessage className='text-danger' name='fullName' component='span'></ErrorMessage>
              </div>
              <div className="div">
                <label htmlFor="time">Id Card</label>
                <Field type="number" className="form__input" id="time" name="idCard" />
                <ErrorMessage className='text-danger' name='idCard' component='span'></ErrorMessage>
              </div>
            </div>
            <div className="form__input-content">
              <div className="div">
                <label htmlFor="di">Number Phone</label>
                <Field type="text" className="form__input" id="di" name="phoneNumber" />
                <ErrorMessage className='text-danger' name='phoneNumber' component='span'></ErrorMessage>
              </div>
              <div className="div">
                <label htmlFor="date">Date Of Birth</label>
                <Field type="date" className="form__input" id="date" name="dateOfBirth" />
                <ErrorMessage className='text-danger' name='dateOfBirth' component='span'></ErrorMessage>
              </div>
            </div>
            <div className="form__input-content">
              <div className="div">
                <label htmlFor="email">Email</label>
                <Field type="text" className="form__input" id="email" name="email" />
                <ErrorMessage className='text-danger' name='email' component='span'></ErrorMessage>
              </div>
              <div className="div">
                <label>Gender</label>
                <Field as="select" name="gender">
                  <option className="option" value>--Gender--</option>
                  <option className="option" value="male">Male</option>
                  <option className="option" value="famale">Famale</option>
                  <option className="option" value="other">Other</option>
                </Field>
                <ErrorMessage className='text-danger' name='gender' component='span'></ErrorMessage>
              </div>
            </div>
            <div className="form__input-content">
              <div className="div">
                <label htmlFor="add">Address</label>
                <Field type="text" className="form__input" id="add" name="address" />
                <ErrorMessage className='text-danger' name='address' component='span'></ErrorMessage>
              </div>
              <div className="div">
                <label>Customer Type</label>
                <Field as="select" name="customerType">
                  {
                    type.map((ty) => (

                      <option className='option' value={`${JSON.stringify(ty)}`}>{ty.name}</option>

                    ))
                  }
                </Field>
              </div>
            </div>
            <div className="end-buttons">
              <button className="my-button" type='submit'>Edit</button>
            </div>
          </Form>
        </div>
      </Formik>
    </div>

  )
}
export default EditCustomer;