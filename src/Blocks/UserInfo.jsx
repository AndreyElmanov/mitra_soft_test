import React from "react";
import { Card } from "react-bootstrap";

export default function UserInfo() {
    return <Card style={{ maxWidth: '25rem' }} className="mt-1 mb-1">
            <Card.Body>
                <Card.Title>Пользователь</Card.Title>
                <Card.Text>Будет информация о пользователе</Card.Text>
            </Card.Body>
           </Card>
}