import { useDispatch } from "react-redux";
import { useNavigate } from "react-router"
import { toast } from "react-toastify";
import { useEffect } from "react";
import * as Yup from 'yup';
import { Form, Formik, ErrorMessage,Field } from "formik";
import { Link } from "react-router-dom";
import { addPosts } from "../redux/middleware/postsMiddleware";

export function CreatePosts () {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const addNewPosts = async (value) => {
        dispatch(addPosts(value))
        navigate("/")
        toast("Thêm mới thành công")
    }
    useEffect(() => {

    },[])
    return(
        <div>
        <h1 className="container mt-5">Create New Posts</h1>
        <Formik 
        initialValues={{
            title: "",
            slug: "",
            category: "",
            thumbnail_url: ""
        }}
        onSubmit={(values) => {
            addNewPosts(values)
        }}
        >
            <Form>
                <div className="container">
                    <label htmlFor="title">Title:</label>
                    <br />
                    <Field type="text" id="title" name="title" className="input"/>
                    <br />
                    <br />
                    <label htmlFor="slug">Slug:</label>
                    <br />
                    <Field type="text" id="slug" name="slug" className="input" />
                    <br />
                    <br />
                    <label htmlFor="category">Category:</label>
                    <br />
                    <Field type="text" id="category" name="category" className="input" />
                    <br />
                    <br />
                    <label htmlFor="thumbnail">Thumbnail URL:</label>
                    <br />
                    <Field type="text" id="thumbnail" name="thumbnail_url" className="input" />
                    <br />
                    <br />
                    <button type="submit" defaultValue="Submit" className="btn btn-primary">Submit</button>
                    <Link to="/" className="btn btn-warning">Cancel</Link>
                </div>

            </Form>
        </Formik>
    </div>
    )
}