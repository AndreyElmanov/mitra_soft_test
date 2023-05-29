import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Container, Form } from "react-bootstrap";
import Post from "../Components/Post";
import { reduserAction } from "../reducers/store";

function AllPosts(props) {
    const [searchString, setSearchString] = useState('');
    let posts = props.posts ? props.posts : [];
    let render_postst = [];

    const handleChangeSearchString = (event) => setSearchString(event.target.value);
    const handleChangeSort = (event) => reduserAction.setSort(event.target.value);

    const handleSearchPosts = () => {
        searchString
            ? posts.forEach(el => (el.title.toLowerCase().slice(0, searchString.length) === searchString) && render_postst.push(el))
            : posts.forEach(el => render_postst.push(el));
    };
    handleSearchPosts();

    const handleSortPosts = () => {
        (props.sort === "sort_a_z") && render_postst.sort((a, b) => a.title.localeCompare(b.title));
        (props.sort === "sort_z_a") && render_postst.sort((a, b) => b.title.localeCompare(a.title));
        (props.sort === "not_sort") && render_postst.sort();
    };
    handleSortPosts();

    return <Container fluid>
            <Form>
                <Form.Group className="d-flex flex-row">
                    <Form.Control className="m-1"
                        placeholder="Начните писать название статьи для поиска"
                        value={searchString}
                        onChange={handleChangeSearchString} />
                    {searchString && <Button className="m-1" onClick={() => setSearchString('')}>X</Button>}
                    <Form.Control as="select" className="m-1 w-25" onChange={handleChangeSort} defaultValue={props.sort}>
                        <option value="not_sort">Без сортировки</option>
                        <option value="sort_a_z">От А до Я</option>
                        <option value="sort_z_a">От Я до А</option>
                    </Form.Control>
                </Form.Group>
            </Form>
            {render_postst.length > 0
                ? <div className="all_posts">
                    {render_postst.map(el => <Post post={el} key={el.id}/>)}
                  </div>
                : <h1 className="text-center">Список постов пуст</h1>}
           </Container>
}

const mapStateToProps = (store) => {
    return {
        posts: store.posts,
        sort: store.sort,
    };
};

export default connect(mapStateToProps)(AllPosts);