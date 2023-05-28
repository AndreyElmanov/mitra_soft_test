import React from "react";
import { Container, Spinner } from "react-bootstrap";
import { connect } from "react-redux";

function Loader(props) {
    return <Container className="d-flex justify-content-center">
            {props.isLoad
                ? <Spinner as="span" animation="border" variant="primary" />
                : props.children}
           </Container>
}

const mapStateToProps = (store) => {
    return {
        isLoad: store.isLoad,
    };
};

export default connect(mapStateToProps)(Loader);