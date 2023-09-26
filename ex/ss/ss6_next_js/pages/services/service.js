import axios from "axios";

export async function getAllPost() {
    const res = await axios.get('http://localhost:8080/posts');
    return res.data;
}

export async function deletePost(id) {
    await axios.delete('http://localhost:8080/posts/' + id);
}

export async function create(post) {
    await axios.post('http://localhost:8080/posts/', post);
}

export async function getPost(id) {
    const res = await axios.get('http://localhost:8080/posts/' + id);
    return res.data;
}

export async function editPost(post) {
    await axios.put('http://localhost:8080/posts/' + post.id, post);
}
