import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import Post from "../Components/Post";
import UserInfo from "../Blocks/UserInfo";


function UserPage(props) {
    return <Container className="d-flex flex-column">
            <NavLink to='/'>
                <Button variant="primary">
                    Назад
                </Button>
            </NavLink>
            <UserInfo />
            <Container fluid className="all_posts">
                {props.posts.map(el => (el.userId === props.user.id) && <Post post={el} key={el.id}/>)}
            </Container>
           </Container>
}

const mapStateToProps = (store) => {
    return {
        user: store.user,
        posts: store.posts,
    };
};

export default connect(mapStateToProps)(UserPage);