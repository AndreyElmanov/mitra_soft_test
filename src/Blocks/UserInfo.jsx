import React from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";

function UserInfo(props) {
    return <Card style={{ maxWidth: '25rem' }} className="mt-1 mb-1">
            <Card.Body>
                <Card.Title>{props.user.username}</Card.Title>
                <Card.Text>Имя: {props.user.name}</Card.Text>
                <Card.Text>Email: {props.user.email}</Card.Text>
                <Card.Text>Город: {props.user.address?.city}</Card.Text>
                <Card.Text>Компания: {props.user.company?.name}</Card.Text>
            </Card.Body>
           </Card>
}

const mapStateToProps = (store) => {
    return {
        user: store.user,
    };
};

export default connect(mapStateToProps)(UserInfo);