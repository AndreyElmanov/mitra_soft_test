import React from "react";
import { Card } from "react-bootstrap";

export default function UserInfo(props) {
  return props.users_error
          ? <h3 className="text-left text-danger">Данные автора не загузились. Попробуйте обновить страницу</h3>
          : <Card style={{ maxWidth: '25rem' }} className="m-1">
              <Card.Body>
                <Card.Title>{props.user.username}</Card.Title>
                <Card.Text>Имя: {props.user.name}</Card.Text>
                <Card.Text>Email: {props.user.email}</Card.Text>
                <Card.Text>Город: {props.user.address?.city}</Card.Text>
                <Card.Text>Компания: {props.user.company?.name}</Card.Text>
              </Card.Body>
            </Card>
}