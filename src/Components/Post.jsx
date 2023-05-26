import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Card, Container } from "react-bootstrap";
import avatar from "../assets/avatar.jpg";
import api from "../utils/api";
import Comment from "./Comment";
import Loader from "./Loader";


export default function Post({post}) {
    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState([]);
    let post_title = post.title;
    let post_text = post.body;
    let post_id = post.id;
    let user_id = post.userId;

    const handleShowComments = () => {
        !showComments && api.getCommentsOfPost(post_id).then(res=>setComments(res));
        setShowComments(!showComments);
    };

    const setUserInfo = () => console.log(user_id);

    return <Card style={{ maxWidth: '25rem' }} className="m-1">
            <NavLink to={`/user/${user_id}`} onClick={setUserInfo}>
                <Card.Img variant="top" src={avatar} className="avatar_style m-1 cursor-pointer"/>
            </NavLink>
            <Card.Body>
                <Card.Title>{post_title}</Card.Title>
                <Card.Text>{post_text}</Card.Text>
                <Button variant="primary" onClick={handleShowComments}>
                    {showComments ? "Скрыть комментарии" : "Показать комментарии"}
                </Button>
                {showComments &&
                    <Card.Text as="div">
                        <Loader>
                            <Container className="d-flex flex-column">
                                {comments.map(el => <Comment email={el.email} text={el.body} key={el.id}/>)}
                            </Container>
                        </Loader>
                    </Card.Text>}
            </Card.Body>
           </Card>
}