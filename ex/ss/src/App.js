import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Posts } from './ss3/components/ListPost';
import { Greetingss } from './ss4/ex';
import Greeting from './ss4/ex1';
import { Blogs } from './ss5/components/Blogs';
import { EditBlog } from './ss5/components/Edit';
import { Detail } from './ss5/components/Detail';
import Create from './ss5/components/Create';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Blogs/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/edit/:id' element={<EditBlog/>}/>
      <Route path='/detail/:id' element={<Detail/>}/>
    </Routes>
    <ToastContainer></ToastContainer>
    </BrowserRouter>
  );
}

export default App;
