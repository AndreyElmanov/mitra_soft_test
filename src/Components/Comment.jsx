import React from "react";
import { Card } from "react-bootstrap";

export default function Comment({email, text}) {
    return <Card style={{ maxWidth: '100%' }} className="m-1">
            <Card.Body>
                <Card.Title>{email}</Card.Title>
                <Card.Text>{text}</Card.Text>
            </Card.Body>
           </Card>
}