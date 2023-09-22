import { useEffect, useState } from "react"
import { getAll } from "../service/postsService";
import { Link } from "react-router-dom";

export function Posts () {
    const [posts, setPosts] = useState([]);
    const getPosts = async () => {
        const res = await getAll();
        setPosts(res);
    }
    useEffect(()=> {
        getPosts();
    },[])
    return(
        <div className="container mt-5">
            <h1 style={{textAlign:"center"}}>List Posts</h1>
            <Link to="/create" className="btn btn-primary float-end">Create</Link>
            <table className="table table-hover" style={{textAlign:"center"}}> 
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Slug</th>
                        <th>Category</th>
                        <th>Thumbnail URL</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map((p) => (
                            <tr key={p.id}>
                                <td>{p.id}</td>
                                <td>{p.title}</td>
                                <td>{p.slug}</td>
                                <td>{p.category}</td>
                                <td>{p.thumbnail_url}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}