import React from "react";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import Post from "../Components/Post";

function AllPosts(props) {
    let posts = props.posts ? props.posts : [];

    return <Container fluid className="all_posts">
            {posts.map(el => <Post post={el} key={el.id}/>)}
           </Container>
}

const mapStateToProps = (store) => {
    return {
        posts: store.posts,
    };
};

export default connect(mapStateToProps)(AllPosts);