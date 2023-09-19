import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
export function Posts() {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [content, setContent] = useState("");
    const [id, setId] = useState(0);
    const [list, setList] = useState(
        [
            {
                "id": 1,
                "title": "5 Best Crypto Performers During The 2022 Market Flop",
                "slug": "5-best-crypto-performers-during-the-2022-market-flop",
                "category": "Crypto News",
                "updatedAt": "21 hours ago"
            },
            {
                "id": 2,
                "title": " Top crypto funding stories of 2022  ",
                "slug": "top-crypto-funding-stories-of-2022",
                "category": "New Year Special",
                "updatedAt": "a day ago"
            },
            {
                "id": 3,
                "title": " 2023 will see the death of play-to-earn gaming ",
                "slug": "2023-will-see-the-death-of-playtoearn-gaming",
                "category": " Opinion",
                "updatedAt": "a day ago"
            },
            {
                "id": 4,
                "title": " US lawmakers under pressure following FTX collapse: Report  ",
                "slug": "us-lawmakers-under-pressure-following-ftx-collapse-report",
                "category": " News",
                "updatedAt": "2 days ago"
            },
            {
                "id": 5,
                "title": "A Crypto Holiday Special: Past, Present, And Future With Material Indicators",
                "slug": "a-crypto-holiday-special-past-present-and-future-with-material-indicators",
                "category": "Interviews",
                "updatedAt": "2 days ago"
            }
        ]
    )

    const handleInputTitle = (title) => {
        setTitle(title);
    }

    const handleInputCategory = (category) => {
        setCategory(category);
    }

    const handleInputContent = (content) => {
        setContent(content);
    }


    const getPost = (id) => {
        for (let i = 0; i < list.length; i++) {
            if (list[i].id === id) {
                setTitle(list[i].title);
                setCategory(list[i].category);
                setContent(list[i].content);
                setId(id);
                break
            }
        }
    }
    const createPost = () => {
        if (title === "" || category === "" || content === "") {
            alert("Do not leave any fields blank");
            return;
        }
        const date = new Date();
        const newPost = {
            "id": Math.floor(Math.random() * 100) + 1,
            "title": title,
            "slug": title.replace(" ", "-").toLowerCase(),
            "category": category,
            "content": content,
            "updatedAt": date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear(),
        }
        const newArray = [...list, newPost];
        setList(newArray);
        setTitle("");
        setCategory("");
        setContent("");
    }
    const deletePost = (id) => {
        const newList = [...list];
        for (let i = 0; i < newList.length; i++) {
            if (id === newList[i].id) {
                newList.splice(i, 1);
                break;
            }
        }
        setList(newList);
    }

    const editPost = () => {
        if (id === 0) {
            alert("you did not choose anything ! ")
            return;
        }
        if (title === "" || category === "" || content === "") {
            alert("you have to input all record");
            return;
        }
        const date = new Date();
        const newPost = {
            "id": id,
            "title": title,
            "slug": title.replace(" ", "-").toLowerCase(),
            "category": category,
            "content": content,
            "updatedAt": date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear(),
        }
        const newList = [...list];
        let flag = false;
        for (let i = 0; i < newList.length; i++) {
            if (newList[i].id === id) {
                newList[i] = {
                    "id": id,
                    "title": title,
                    "slug": title.replace(" ", "-").toLowerCase(),
                    "category": category,
                    "content": content,
                    "updatedAt": date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear(),
                };
                flag = true;
                setId(-1);
            }
        }
        if (flag) {
            setList(newList);
        } else {
            alert("can't find post");
        }
        setTitle("");
        setCategory("");
        setContent("");
    }
    return (
        <>
            <h1 style={{textAlign:"center"}}>List Posts</h1>

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>CATEGORY</th>
                        <th>TIME</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((even, index) => (
                            <tr key={even.id}>
                                <td>{index+1}</td>
                                <td>{even.title}</td>
                                <td>{even.category}</td>
                                <td>{even.updatedAt}</td>
                                <td>
                                    <button className="btn btn-warning" onClick={() => getPost(even.id)}>Edit</button>
                                </td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => deletePost(even.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className="container px-5 my-5">
            
                <div>
                    <label htmlFor='title'>Input title</label>
                    
                    <input className="form-control" id="title" name="title" value={title} onChange={(event) => handleInputTitle(event.target.value)}></input>
                </div>
                <div>
                    <label htmlFor='category'>Input category</label>
                    
                    <input className="form-control" id="category" name="category" value={category} onChange={(event) => handleInputCategory(event.target.value)}></input>
                </div>
                <div>
                    <label htmlFor='content'>Input content</label>
                    
                    <input className="form-control" id="content" name="content" value={content} onChange={(event) => handleInputContent(event.target.value)}></input>
                </div>
                <button className="btn btn-primary" onClick={()=> createPost()}>Add</button>
                <button className="btn btn-primary" onClick={()=> editPost()}>edit</button>
            </div> 
        </>
    )
}