import React from "react";
import { Card, Container } from "react-bootstrap";
import NavButton from "../Components/NavButton";

export default function AboutMe() {
    return <Container className="d-flex flex-column">
            <NavButton to='/' text="На главную" />
            <Card className="m-1">
                <Card.Body>
                    <Card.Title>Елманов Андрей</Card.Title>
                    <Card.Text>
                        Занимаюсь фронтендом с 2019 года. Начинал работать в WordPress.
                        В 2021 году обучился JavaScript, React.
                        Параллельно изучаю Svelte, TypeScript, в планах приступить к изучению Vue.
                    </Card.Text>
                    <Card.Text>
                        В свободное время занимаюсь спортом, играю в хоккей с шайбой.
                    </Card.Text>
                    <Card.Text>
                        Занимаюсь пограммированием с удовольствием, получаю от этого удовольствие. Хочу развиваться в этом дальше.
                    </Card.Text>
                </Card.Body>
            </Card>
           </Container>
}