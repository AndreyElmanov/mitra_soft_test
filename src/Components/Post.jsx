import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Card, Spinner } from "react-bootstrap";
import avatar from "../assets/avatar.jpg";
import api from "../utils/api";
import Comment from "./Comment";
import { reduserAction } from "../reducers/store";

export default function Post({post}) {
    const [showComments, setShowComments] = useState(false);
    const [showSpinner, setShowSpinner] = useState(false);
    const [comments, setComments] = useState([]);
    const pathname = useLocation().pathname;
    const navigate = useNavigate();
    let post_title = post.title;
    let post_text = post.body;
    let post_id = post.id;
    let user_id = post.userId;

    const handleShowComments = () => {
        if (!showComments) {
            setShowSpinner(true)
            api.getCommentsOfPost(post_id)
            .then(res => setComments(res))
            .catch(e => console.log(e))
            .finally(() => setTimeout(() => setShowSpinner(false), 500));
        };
        setShowComments(!showComments);
    };

    const setUserInfo = () => {
        if (pathname !== `/user/${user_id}`) {
            navigate(`/user/${user_id}`);
            reduserAction.loadStart();
            api.getOneUser(user_id)
            .then(res => reduserAction.setUser(res))
            .catch(e => console.log(e))
            .finally(() => setTimeout(reduserAction.loadStop, 500));
        }
    };

    return <Card style={{ maxWidth: '25rem' }} className="m-1">
            <Card.Img variant="top" src={avatar} className="avatar_style m-1 cursor-pointer" onClick={setUserInfo}/>
            <Card.Body>
                <Card.Title>{post_title}</Card.Title>
                <Card.Text>{post_text}</Card.Text>
                <Button variant="primary" onClick={handleShowComments}>
                    {(showComments && !showSpinner) ? "Скрыть комментарии" : "Показать комментарии "}
                    {showSpinner && <Spinner as="span" animation="border" variant="light" size="sm"/>}
                </Button>
                {showComments &&
                    <Card.Text as="div">
                        {!showSpinner &&
                            comments.map(el => <Comment email={el.email} text={el.body} key={el.id}/>)}
                    </Card.Text>}
            </Card.Body>
           </Card>
}