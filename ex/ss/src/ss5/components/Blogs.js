import { useEffect, useState } from "react";
import { deleteBlog, getAll } from "../service/BlogService";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export function Blogs () {
    const [blog, setBlog] = useState([]);
    const getBlog = async () => {
       const res = await getAll();
       setBlog(res);
    }
    useEffect(() => {
        getBlog()
    },[])
    const removeBlog = async (id) => {
        await deleteBlog(id)
        getBlog();
        toast("Delete successfuly!")
    }
    return(
        <>
        <h1>List Blogs</h1>
        <table className="table table-hover">
            <Link className="btn btn-primary" to="/create">Add Blog</Link>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Titel</th>
                    {/* <th>Slug</th> */}
                    <th>Category</th>
                    {/* <th>Content</th> */}
                    <th>Author</th>
                    <th>Email</th>
                    <th colSpan={3}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    blog.map((b) => {
                        return(
                            <tr key={b.id}>
                                <td>{b.id}</td>
                                <td>{b.title}</td>
                                {/* <td>{b.slug}</td> */}
                                <td>{b.category}</td>
                                {/* <td>{b.content}</td> */}
                                <td>{b.author}</td>
                                <td>{b.email}</td>
                                <td>
                                    <Link className="btn btn-success" to={`/detail/${b.id}`}>Detail</Link>
                                </td>
                                <td>
                                    <Link className="btn btn-warning" to={`/edit/${b.id}`}>Edit</Link>
                                </td>
                                <td>
                                    <button className="btn btn-danger" onClick={()=> removeBlog(b.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </>
    )
}