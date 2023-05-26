import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";

export default function Loader(props) {
    const [isLoad, setIsLoad] = useState(true);

    useEffect(()=>{
        setIsLoad(true);
        setTimeout(() => setIsLoad(false), 500);
    },[props.location]);

    return <Container className="d-flex justify-content-center">
            {isLoad
                ? <Spinner as="span" animation="border" variant="primary"  />
                : props.children}
           </Container>
}