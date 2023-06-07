import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import SearchInput from "../Components/SearchInput";
import AllPosts from "../Components/AllPosts";
import PostPagination from "../Components/PostPagination";
import { reducerAction } from "../reducers/reducerAction";

export default function MainPage() {
    const [searchString, setSearchString] = useState('');
    const [listNumber, setListNumber] = useState(1);
    const posts = useSelector(store => store?.postsReducer?.posts);
    const sort = useSelector(store => store?.sortReducer?.sort);
    const posts_error = useSelector(store => store?.postsReducer?.error);
    const render_posts = searchString
        ? posts.filter(el => el.title.toLowerCase().slice(0, searchString.length) === searchString.toLowerCase())
        : posts.filter(el => el);
    const posts_on_page = 20;
    let pages = Math.ceil(posts.length / posts_on_page);
    let show_posts = [];

    (sort === "sort_a_z") && render_posts.sort((a, b) => a.title.localeCompare(b.title));
    (sort === "sort_z_a") && render_posts.sort((a, b) => b.title.localeCompare(a.title));
    (sort === "not_sort") && render_posts.sort();

    const start = posts_on_page * listNumber - posts_on_page;
    const end = posts_on_page * listNumber;
    show_posts = render_posts.slice(start, end);
    pages = Math.ceil(render_posts.length / posts_on_page);
    window.scrollTo({top: 0});

    const handleChangeSearchString = (event) => setSearchString(event.target.value);
    const handleClearSearchString = () => setSearchString('');
    const handleChangeSort = (event) => reducerAction.setSort(event.target.value);

    useEffect(()=> {
        if (render_posts.length < posts.length) setListNumber(1);
    }, [render_posts]);

    return <Container>
            {!posts_error &&
                <SearchInput searchString={searchString}
                    handleChangeSearchString={handleChangeSearchString}
                    handleClearSearchString={handleClearSearchString}
                    handleChangeSort={handleChangeSort}
                    sort={sort} />}
            <AllPosts posts={show_posts} posts_error={posts_error}/>
            {pages > 1 &&
                <PostPagination pages={pages} setListNumber={setListNumber} listNumber={listNumber} />}
           </Container>
}