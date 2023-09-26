import { useEffect, useState } from "react"
import { useRouter } from "next/router";
import { getAllPost } from "./services/service";
import React from 'react';

export default function ListPost() {
    const navigate = useRouter();
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getAll();
    }, [])

    const getAll = async () => {
        const list = await getAllPost()
        setPosts((pre) => list);
    }
    const toCreate = () => {
        navigate.replace('/createPost');
    }

    return (
        <>
            <h1>LIST POST</h1>
            <button onClick={() => toCreate()}>Create post</button>
            <table border={1}>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>TITLE</td>
                        <td>CATEGORY</td>
                        <td>SLUG</td>
                        <td>ACTION</td>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((p) => {
                        return (
                            <tr>
                                <td>{p.id}</td>
                                <td>{p.title}</td>
                                <td>{p.category}</td>
                                <td>{p.slug}</td>
                                {/* <td>
                                    
                                    <button onClick={() => toEdit(p.id)}>Edit</button>
                                </td> */}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            
        </>
    )
}