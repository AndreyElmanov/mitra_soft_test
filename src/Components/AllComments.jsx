import React from "react";
import { Card } from "react-bootstrap";
import Comment from "./Comment";

export default function AllComments(props) {
  if (!props.showSpinner) {
    return props.comments_error
            ? <Card.Text className="text-center text-danger">Ошибка сети. Попробуйте обновить</Card.Text>
            : props.comments.length > 0
                ? <Card.Text as="div">
                    {props.comments.map(el => <Comment email={el.email} text={el.body} key={el.id}/>)}
                  </Card.Text>
                : <Card.Text className="text-center">Комментариев нет</Card.Text>
  }
}