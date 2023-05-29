import React, { useState } from "react";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import { reduserAction } from "../reducers/store";
import SearchInput from "../Components/SearchInput";
import AllPosts from "../Components/AllPosts";

function MainPage(props) {
    const [searchString, setSearchString] = useState('');
    let posts = props.posts ? props.posts : [];
    let render_postst = [];

    const handleChangeSearchString = (event) => setSearchString(event.target.value);
    const handleClearSearchString = () => setSearchString('');
    const handleChangeSort = (event) => reduserAction.setSort(event.target.value);
    const handleSearchPosts = () => searchString
        ? posts.forEach(el => (el.title.toLowerCase().slice(0, searchString.length) === searchString) && render_postst.push(el))
        : posts.forEach(el => render_postst.push(el));
    const handleSortPosts = () => {
        (props.sort === "sort_a_z") && render_postst.sort((a, b) => a.title.localeCompare(b.title));
        (props.sort === "sort_z_a") && render_postst.sort((a, b) => b.title.localeCompare(a.title));
        (props.sort === "not_sort") && render_postst.sort();
    };

    handleSearchPosts();
    handleSortPosts();

    return <Container fluid>
            <SearchInput searchString={searchString}
                        handleChangeSearchString={handleChangeSearchString}
                        handleClearSearchString={handleClearSearchString}
                        handleChangeSort={handleChangeSort}
                        sort={props.sort} />
            {render_postst.length > 0
                ? <AllPosts posts={render_postst} />
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