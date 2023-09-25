import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { PostsList } from './ss8/components/PostsList';
// import { Posts } from './ss3/components/ListPost';
// import { Greetingss } from './ss4/ex';
// import Greeting from './ss4/ex1';
// import { Blogs } from './ss5/components/Blogs';
// import { EditBlog } from './ss5/components/Edit';
// // import { Detail } from './ss5/components/Detail';
// import Create from './ss5/components/Create';
import { ToastContainer } from 'react-toastify';
import { CreatePosts } from './ss8/components/CreatePosts';
import "react-toastify/dist/ReactToastify.css";
// import { Posts } from './ss7/compenents/Posts';
// import { CreatePosts } from './ss7/compenents/CreatePosts';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<PostsList/>}/>
      <Route path='/add' element={<CreatePosts/>}/>
      {/* <Route path='/create' element={<Create/>}/>
      <Route path='/edit/:id' element={<EditBlog/>}/> */}
      {/* <Route path='/detail/:id' element={<Detail/>}/> */}
      {/* <Route path='/' element={<Posts/>}/>
      <Route path='/create' element={<CreatePosts/>}/> */}
    </Routes>
    <ToastContainer></ToastContainer>
    </BrowserRouter>
  );
}

export default App;
