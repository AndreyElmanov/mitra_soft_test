import React from "react";
import { Pagination } from "react-bootstrap";

export default function PostPagination(props) {
    let list_number = +props.listNumber;
    const handleSetListNumber = (event) => props.setListNumber(event.target.id);
    const handlePrevList = () => (list_number > 1) && props.setListNumber(list_number - 1);
    const handleNextList = () => (list_number < props.pages) && props.setListNumber(list_number + 1);

    let items = [];
    for (let i = 0; i < props.pages; i++) {
        let value = i + 1;
        let active = (list_number === value) ? true : false;
        items.push(<Pagination.Item onClick={handleSetListNumber} id={value} key={i} active={active}>{value}</Pagination.Item>)
    };

    return <Pagination className="justify-content-center mt-2">
            <Pagination.Prev onClick={handlePrevList}/>
            {items.map(el => el)}
            <Pagination.Next onClick={handleNextList}/>
           </Pagination>
}