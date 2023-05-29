import React from "react";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import UserInfo from "../Components/UserInfo";
import NavButton from "../Components/NavButton";
import AllPosts from "../Components/AllPosts";


function UserPage(props) {
    let user_posts = [];
    props.posts.forEach(el => (el.userId === props.user.id) && user_posts.push(el));

    return <Container className="d-flex flex-column">
            <NavButton to="/" text="Назад"/>
            <UserInfo />
            <AllPosts posts={user_posts} />
           </Container>
}

const mapStateToProps = (store) => {
    return {
        user: store.user,
        posts: store.posts,
    };
};

export default connect(mapStateToProps)(UserPage);