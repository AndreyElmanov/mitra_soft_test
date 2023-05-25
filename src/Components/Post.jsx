import React, { useState } from "react";
import { Button, Card, Spinner } from "react-bootstrap";
import avatar from "../assets/avatar.jpg";

export default function Post() {
    const [showComments, setShowComments] = useState(false);
    const [showSpinner, setShowSpinner] = useState(true);
    const handleShowComments = () => {
        showComments ? setShowSpinner(true) : setTimeout(()=>setShowSpinner(false), 1000);
        setShowComments(!showComments);
    }
    return <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={avatar} />
                <Card.Body>
                <Card.Title>Заголовок поста</Card.Title>
                <Card.Text>
                    Здесь будет текст поста
                </Card.Text>
                <Button variant="primary" onClick={handleShowComments}>
                    {showComments ? "Скрыть комментарии" : "Показать комментарии"}
                </Button>
                {showComments &&
                    <Card.Text>
                        {showSpinner
                            ? <Spinner as="span" animation="border" variant="primary" size="sm" />
                            : "Будут комментарии"}
                    </Card.Text>}
                </Card.Body>
            </Card>
}