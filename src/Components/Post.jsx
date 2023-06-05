import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Card, Spinner } from "react-bootstrap";
import avatar from "../assets/avatar.jpg";
import { reducerAction } from "../reducers/reducerAction";
import AllComments from "./AllComments";

export default function Post({post}) {
    const [showComments, setShowComments] = useState(false);
    const [showSpinner, setShowSpinner] = useState(false);
    const [comments, setComments] = useState([]);
    const comments_error = useSelector(store => store?.commentsReducer?.error);
    const navigate = useNavigate();
    let post_title = post.title;
    let post_text = post.body;
    let post_id = post.id;
    let user_id = post.userId;

    const handleSetComments = (data) => {
        setComments(data);
        setShowSpinner(false);
    };

    const handleShowComments = () => {
        if (!showComments) {
            setShowSpinner(true);
            reducerAction.setComments(handleSetComments);
            reducerAction.selectPost(post_id);
        };
        setShowComments(!showComments);
    };

    const handleNavigate = () => navigate(`/user/${user_id}`);

    return <Card style={{ maxWidth: '25rem' }} >
            <Card.Img variant="top" src={avatar} className="avatar_style m-1 cursor-pointer" onClick={handleNavigate}/>
            <Card.Body>
                <Card.Title>{post_title}</Card.Title>
                <Card.Text>{post_text}</Card.Text>
                <Button variant="primary" onClick={handleShowComments}>
                    {(showComments && !showSpinner) ? "Скрыть комментарии" : "Показать комментарии "}
                    {showSpinner && <Spinner as="span" animation="border" variant="light" size="sm"/>}
                </Button>
                {showComments &&
                    <AllComments showSpinner={showSpinner} comments={comments} comments_error={comments_error} />}
            </Card.Body>
           </Card>
}