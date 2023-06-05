import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Container } from "react-bootstrap";
import UserInfo from "../Components/UserInfo";
import NavButton from "../Components/NavButton";
import AllPosts from "../Components/AllPosts";
import { reducerAction } from "../reducers/reducerAction";

export default function UserPage() {
    const pathname = useLocation().pathname;
    const user_id = +pathname.replace("/user/", "");
    const posts = useSelector(store => store?.postsReducer?.posts);
    const posts_error = useSelector(store => store?.postsReducer?.error);
    const user = useSelector(store => store?.userReducer?.user);
    const users_error = useSelector(store => store?.userReducer?.error);
    const selected_user = useSelector(store => store?.userReducer?.selected_user);
    let user_posts = posts.filter(el => el.userId === user_id);

    useEffect(() => {
        if (selected_user === 0 || selected_user !== user_id) reducerAction.selectUser(user_id);
    }, []);

    return <Container className="d-flex flex-column">
            <NavButton to="/" text="Назад"/>
            <UserInfo user={user} users_error={users_error} />
            <AllPosts posts={user_posts} posts_error={posts_error} />
           </Container>
}