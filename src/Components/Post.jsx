import React, { useState } from "react";
import { Button, Card, Spinner } from "react-bootstrap";
import avatar from "../assets/avatar.jpg";
import api from "../utils/api";
import Comment from "./Comment";

export default function Post({post}) {
    const [showComments, setShowComments] = useState(false);
    const [showSpinner, setShowSpinner] = useState(true);
    const [comments, setComments] = useState([]);
    let post_title = post.title;
    let post_text = post.body;
    let post_id = post.id;
    const handleShowComments = () => {
        showComments
            ? setShowSpinner(true)
            : api.getCommentsOfPost(post_id).then(res=>setComments(res)) && setTimeout(()=>setShowSpinner(false), 500);
        setShowComments(!showComments);
    };
    return <Card style={{ maxWidth: '25rem' }} className="m-1">
            <Card.Img variant="top" src={avatar} className="avatar_style m-1 cursor-pointer"/>
            <Card.Body>
                <Card.Title>{post_title}</Card.Title>
                <Card.Text>{post_text}</Card.Text>
                <Button variant="primary" onClick={handleShowComments}>
                    {showComments ? "Скрыть комментарии" : "Показать комментарии"}
                </Button>
                {showComments &&
                    <Card.Text as="div">
                        {showSpinner
                            ? <Spinner as="span" animation="border" variant="primary" size="sm" />
                            : comments.map(el => <Comment email={el.email} text={el.body} key={el.id}/>)}
                    </Card.Text>}
            </Card.Body>
           </Card>
}