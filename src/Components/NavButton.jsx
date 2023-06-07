import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NavButton(props) {
    return <NavLink to={props.to} className={`m-1 max_content ${props.className ? props.className : ""}`}>
            <Button variant={props.variant ? props.variant : "primary"}>
                {props.text}
            </Button>
           </NavLink>
}