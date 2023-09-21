
import { ToastContainer } from 'react-toastify';
import Contract from './contact/components/Contact';
import CreateContract from './contact/components/CreateContact';
import './css/style.css'
import CreateCustomer from './customers/components/CreateCustomer';
import Customer from './customers/components/Customer';
import EditCustomer from './customers/components/EditCustomer';
import CreateHouse from './facility/components/CreateHouse';
import Facility from './facility/components/Facility';
import Footer from './layout/Footer';
import Header from './layout/Header';
// import './vendors/bootstrap/bootstrap.min.css';
import './vendors/linericon/style.css'
import './vendors/nice-select/nice-select.css';
import './vendors/themify-icons/themify-icons.css'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";



function App() {
  return (
    <BrowserRouter>
      <Header />
      <ToastContainer></ToastContainer>
      <div>
      <Routes>
        <Route path='/' element={<Facility />} />
        <Route path='/customers' element={<Customer />} />
        <Route path='/contract' element={<Contract />} />
        <Route path='/edit-customers' element={<EditCustomer />} />
        <Route path='/create-customers' element={<CreateCustomer />} />
        <Route path='/create-contract' element={<CreateContract />} />
        <Route path='/create-house' element={<CreateHouse />} />
      </Routes>
      
      </div>
      {/* <div>
      <Footer/>
      </div> */}
    </BrowserRouter>
  );
}

export default App;
