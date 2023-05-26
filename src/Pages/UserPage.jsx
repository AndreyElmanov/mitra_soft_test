import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import Post from "../Components/Post";
import api from "../utils/api";
import UserInfo from "../Blocks/UserInfo";


export default function UserPage() {
    const [userPosts, setUserPosts] = useState([]);
    let user_id = 6;

    useEffect(() => {
        api.getPosts()
        .then(res => setUserPosts(res))
        .catch(e => console.log(e))
    }, []);

    return <Container className="d-flex flex-column">
            <NavLink to='/'>
                <Button variant="primary">
                    Назад
                </Button>
            </NavLink>
            <UserInfo />
            <Container fluid className="all_posts">
                {userPosts.map(el => (el.userId === user_id) && <Post post={el} key={el.id}/>)}
            </Container>
           </Container>
}