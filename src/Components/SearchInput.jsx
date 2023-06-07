import React from "react";
import { Button, Form } from "react-bootstrap";

export default function SearchInput(props) {
    return <Form>
            <Form.Group className="d-flex flex-row">
                <Form.Control className="m-1"
                            placeholder="Начните писать название статьи для поиска"
                            value={props.searchString}
                            onChange={props.handleChangeSearchString} />
                {props.searchString && <Button className="m-1" onClick={props.handleClearSearchString}>X</Button>}
                <Form.Control as="select" className="m-1 max_content cursor-pointer" onChange={props.handleChangeSort} defaultValue={props.sort}>
                    <option value="not_sort">Без сортировки</option>
                    <option value="sort_a_z">От А до Я</option>
                    <option value="sort_z_a">От Я до А</option>
                </Form.Control>
            </Form.Group>
           </Form>
}