import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Post from "../Components/Post";
import api from "../utils/api";

export default function AllPosts() {
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        api.getPosts()
        .then(res => setUserPosts(res))
        .catch(e => console.log(e))
    }, []);

    return <Container fluid className="all_posts">
            {userPosts.map(el => <Post post={el} key={el.id}/>)}
           </Container>
}