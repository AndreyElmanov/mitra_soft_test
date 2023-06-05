import React from "react";
import { Container } from "react-bootstrap";
import Post from "./Post";

export default function AllPosts(props) {
  return props.posts_error
          ? <h1 className="text-center text-danger">Ошибка сети. Попробуйте обновить страницу или зайдите позже</h1>
          : props.posts.length > 0
            ? <Container className="all_posts p-0 m-1">
                {props.posts.map(el => <Post post={el} key={el.id}/>)}
              </Container>
            : <h1 className="text-center">Список постов пуст</h1>
}