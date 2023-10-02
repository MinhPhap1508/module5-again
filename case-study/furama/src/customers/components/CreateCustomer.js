import { useNavigate } from 'react-router-dom';
import '../components/edit.css'
import { createCustomer, getAllCustomerType } from '../service/CustomerService'
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { Field, Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { log } from 'async';

function CreateCustomer() {
  const navigate = useNavigate();
  const [type, setType] = useState([]);
  const addCustomer = async (value) => {
    const newValue = await { ...value, customerType: JSON.parse(value.customerType) }
    // value.customerType= JSON.parse(value.customerType);
    
    await createCustomer(newValue);
    navigate("/customers");
    toast("Added successfully!")
  }
  const loadType = async () => {
    const res = await getAllCustomerType()
    console.log(res);
    setType(res)
  }
  console.log(type);
  useEffect(() => {
    loadType()
  }, [])
  return (
    <Formik
      initialValues={{
        fullName: "",
        dateOfBirth: "",
        gender: true,
        idCard: "",
        phoneNumber: "",
        email: "",
        customerType: JSON.stringify(type[0])
      }}

      onSubmit={(values) => {
        addCustomer(values);
      }}
    >
      <div className="body">
        <div className="form">
          <div className="form-header">Add customer</div>
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
                  <option className="option" value="true" >Male</option>
                  <option className="option" value="false">Famale</option>
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
                  <option>---- </option>
                  {
                    type.map((ty) => (

                      <option className='option' value={JSON.stringify(ty)}>{ty.name}</option>

                    ))
                  }
                </Field>
              </div>
            </div>
            <div className="end-buttons">
              <button className="my-button" type='submit'>Add</button>
            </div>
          </Form>
        </div>
      </div>
    </Formik>

  )
}
export default CreateCustomer