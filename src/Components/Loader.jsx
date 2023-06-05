import React from "react";
import { Container, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Loader(props) {
    const isLoad = useSelector(store => store?.loadReducer?.isLoad);
    return <Container className="d-flex justify-content-center">
            {isLoad
                ? <Spinner as="span" animation="border" variant="primary" />
                : props.children}
           </Container>
}