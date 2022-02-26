import React, {useEffect, useState} from 'react';
import PostsList from "../components/posts/PostsList";
import Search from "../components/posts/Searchform";
import {Button, Modal} from "react-bootstrap";
import AddPostForm from "../components/posts/AddPostForm";
import api from "../utils/jsonPlaceholderApi";

function PostsView() {
    const [posts, setPosts] = useState([]);
    const [showModal, setShowModal] = useState(false)

    async function getPosts(params) {
        const response = await api.get('/posts', {
            params
        });
        setPosts(response.data);
    }

    useEffect( () => {
        getPosts().catch(console.error);
    },[]);


    const hiderModal = () => setShowModal(false)

    return (
        <div>
            <Search onSubmit={getPosts}/>
            <Button variant="primary" onClick={() => setShowModal(true)}>Add new post</Button>
    <h1>posts view</h1>
            <PostsList data={posts}/>
            <Modal show={showModal} onHide={hiderModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <AddPostForm onSubmit={hiderModal}/>
                </Modal.Body>

            </Modal>
        </div>
    );
}

export default PostsView;