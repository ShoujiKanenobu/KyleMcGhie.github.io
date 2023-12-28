import React from "react";
import { CardGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export default function Projects() {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <CardGroup style={{ margin: "15px" }}>
                <Card style={{ width: "10rem", marginRight: "10px" }}>
                    <Card.Img
                        variant="top"
                        src="./CrystalGuard.png"
                        width="150"
                    />
                    <Card.Body>
                        <Card.Title>Crystal Guard TD</Card.Title>
                        <Card.Text>
                            Designed the game from top to bottom. Code primary
                            focused on creating an easily expandable and modular
                            tower system and powerup system.
                        </Card.Text>
                        <Button
                            href="https://github.com/ShoujiKanenobu/CrystalGuard"
                            variant="primary"
                        >
                            View on Github
                        </Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: "10rem", marginRight: "10px" }}>
                    <Card.Img variant="top" src="./MapleTaxi.png" width="150" />
                    <Card.Body>
                        <Card.Title>Maple Taxi</Card.Title>
                        <Card.Text>
                            Designed alongside teachers from a local Japanese
                            school, my work focused on the 3D Car Controller,
                            implementing L-system based procedural city
                            generator and a simple tool for teachers to modify
                            the game's quiz questions.
                        </Card.Text>
                        <Button
                            href="https://github.com/ShoujiKanenobu/ProjectMaple"
                            variant="primary"
                        >
                            View on Github
                        </Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: "10rem", marginRight: "10px" }}>
                    <Card.Img
                        variant="top"
                        src="./FireBurning.png"
                        width="150"
                    />
                    <Card.Body>
                        <Card.Title>The Fire Burning</Card.Title>
                        <Card.Text>
                            Created in 48 hours as part of the Ludum Dare Game
                            Jam, I focused on creating a fun arcade style 2D
                            character controller and high score system. I also
                            created all visuals in this project, including a
                            simple fire VFX.
                        </Card.Text>
                        <Button
                            href="https://github.com/ShoujiKanenobu/TheFireBurning"
                            variant="primary"
                        >
                            View on Github
                        </Button>
                        <Button
                            href="https://ldjam.com/events/ludum-dare/46/the-fire-burning"
                            variant="primary"
                        >
                            View on Ludum Dare
                        </Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: "10rem" }}>
                    <Card.Img
                        variant="top"
                        src="./MessyClicker.png"
                        width="150"
                    />
                    <Card.Body>
                        <Card.Title>Messy Clicker</Card.Title>
                        <Card.Text>
                            Designed the game from top to bottom. Code primary
                            focused on creating an easily expandable and modular
                            tower system and powerup system.
                        </Card.Text>
                        <Button
                            href="https://shouji.itch.io/messyclicker"
                            variant="primary"
                        >
                            View on Itch
                        </Button>
                        <Button
                            href="https://github.com/ShoujiKanenobu/messyclicker"
                            variant="primary"
                        >
                            View on Github
                        </Button>
                    </Card.Body>
                </Card>
            </CardGroup>
        </section>
    );
}
