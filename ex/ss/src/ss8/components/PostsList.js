import { useDispatch, useSelector } from "react-redux"
import store from "../redux/Store"
import { useEffect } from "react";
import { getAllPosts } from "../redux/middleware/postsMiddleware";
import { Link } from "react-router-dom";

export function PostsList () {
    const posts = useSelector(store => store.posts)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllPosts());
    },[])
    return(
        <>
        <h1>Posts List</h1>
        <Link to="/add" className="btn btn-primary">Add</Link>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Slug</th>
                    <th>Category</th>
                    <th>Thumbnail URL</th>
                </tr>
            </thead>
            <tbody>
                {
                    posts.map((m) => (
                        <tr key={m.id}>
                                <td>{m.title}</td>
                                <td>{m.slug}</td>
                                <td>{m.category}</td>
                                <td>{m.thumbnail_url}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </>
    )
}