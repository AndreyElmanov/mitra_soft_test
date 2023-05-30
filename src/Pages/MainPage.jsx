import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import { reduserAction } from "../reducers/store";
import SearchInput from "../Components/SearchInput";
import AllPosts from "../Components/AllPosts";
import PostPagination from "../Components/PostPagination";

function MainPage(props) {
    const [searchString, setSearchString] = useState('');
    const [listNumber, setListNumber] = useState(1);
    const posts = props.posts;
    const render_posts = [];
    const posts_on_page = 20;
    let pages = Math.ceil(posts.length / posts_on_page);
    let show_posts = [];

    useEffect(()=> {
        if (render_posts.length < posts.length) setListNumber(1);
    }, [render_posts]);

    const handleChangeSearchString = (event) => setSearchString(event.target.value);
    const handleClearSearchString = () => setSearchString('');
    const handleChangeSort = (event) => reduserAction.setSort(event.target.value);
    const handleSearchPosts = () => searchString
        ? posts.forEach(el => (el.title.toLowerCase().slice(0, searchString.length) === searchString) && render_posts.push(el))
        : posts.forEach(el => render_posts.push(el));
    const handleSortPosts = () => {
        (props.sort === "sort_a_z") && render_posts.sort((a, b) => a.title.localeCompare(b.title));
        (props.sort === "sort_z_a") && render_posts.sort((a, b) => b.title.localeCompare(a.title));
        (props.sort === "not_sort") && render_posts.sort();
    };
    const handlePagination = () => {
        let start = posts_on_page * listNumber - posts_on_page;
        let end = posts_on_page * listNumber;
        show_posts = render_posts.slice(start, end);
        pages = Math.ceil(render_posts.length / posts_on_page);
        window.scrollTo({top: 0});
    };

    handleSearchPosts();
    handleSortPosts();
    handlePagination();

    return <Container fluid>
            <SearchInput searchString={searchString}
                        handleChangeSearchString={handleChangeSearchString}
                        handleClearSearchString={handleClearSearchString}
                        handleChangeSort={handleChangeSort}
                        sort={props.sort} />
            {render_posts.length > 0
                ? <>
                    <AllPosts posts={show_posts} />
                    {pages > 1 &&
                        <PostPagination pages={pages}
                                    setListNumber={setListNumber}
                                    listNumber={listNumber} />}
                  </>
                : <h1 className="text-center">Список постов пуст</h1>}
           </Container>
}

const mapStateToProps = (store) => {
    return {
        posts: store.posts,
        sort: store.sort,
    };
};

export default connect(mapStateToProps)(MainPage);