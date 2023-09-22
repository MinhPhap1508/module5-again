import { Formik,Form, Field } from "formik";
import { create } from "../service/postsService";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export function CreatePosts() {
    const navigate = useNavigate();
const createPosts = async (value) => {
    await create(value)
    navigate("/")
    toast("Thêm mới thành công")
}
    return (
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
                createPosts(values)
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