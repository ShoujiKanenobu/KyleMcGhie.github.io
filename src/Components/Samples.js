import React from "react";
import "./Sample.css";
import { Carousel, CarouselItem } from "react-bootstrap";
export default function Samples() {
    return (
        <section id="samples">
            <h2>Sample Code</h2>
            <Carousel style={{ backgroundColor: "#c2c2c2" }}>
                <CarouselItem>
                    <div className="rowC">
                        <div className="ps-10">
                            <img
                                src="./TowerBaseSample.png"
                                alt="Tower Base Sample"
                                width="auto"
                                height="600px"
                            ></img>
                        </div>
                        <div className="">
                            <h3>Tower Base</h3>
                            <h5>Explanation</h5>
                            <div>
                                This is a snippet of the base class for all
                                towers in Crystal Guard TD. The shared
                                functionality of all towers included drag and
                                drop inventory system, general tower information
                                and indicators, and the data behind the towers
                                attacks.{" "}
                            </div>
                            <h5>My Thoughts</h5>
                            <div>
                                I was really happy with this code, specifically
                                because I expected the flaws it would have going
                                into writing it. Changing the behaviour was
                                really seemless, but changing the data involved
                                a lot of work in the Unity inspector. I had
                                anticipated a lot of behavioural changes, so
                                this worked out great.
                            </div>
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="rowC">
                        <div>
                            <img
                                src="./SentenceParserSample.png"
                                alt="Sentence Parser Sample"
                                width="auto"
                                height="600px"
                            ></img>
                        </div>
                        <div>
                            <h3>Sentence Parser</h3>
                            <h5>Explanation</h5>
                            <div>
                                This is a snippet of the Sentence parser for
                                Maple Taxi. Teachers were able to import a text
                                file into the game following a given syntax, and
                                the questions in the text file would be parsed
                                and added to the game. The hard coded Particle
                                list contains every Japanese sentence particle.
                            </div>
                            <h5>My Thoughts</h5>
                            <div>
                                While the tool worked great and teachers were
                                able to add sentences with ease, there still was
                                more manual work that had to be done to make the
                                parser truly work. Some issues with Japanese vs
                                English spaces were the root of the issue, and
                                had to be solved by running a manual find and
                                replace. I'm confident that it would be a simple
                                fix now, but at the time of writing, it kept me
                                up at night.
                            </div>
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="rowC">
                        <div>
                            <img
                                src="./FireBurningCharacterSample.png"
                                alt="Fire Burning Sample"
                                width="auto"
                                height="600px"
                            ></img>
                        </div>
                        <div>
                            <h3>2D Character Controller</h3>
                            <h5>Explanation</h5>
                            <div>
                                This is a snippet of the Player controller from
                                my Ludum Dare entry, The Fire Burning. Along
                                side simple 2D player movement, the player could
                                pickup and throw objects.
                            </div>
                            <h5>My Thoughts</h5>
                            <div>
                                This actually was the first game I completed in
                                my career, and looking back, it was nothing
                                groundbreaking. If I was to re-write it, I would
                                remove some of the defensive nature of the code,
                                and save off references that I repeatedly use,
                                but in concept I'm very proud of my past self.
                            </div>
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="rowC">
                        <div>
                            <img
                                src="./AutomataSample.png"
                                alt="Automata Sample"
                                width="auto"
                                height="600px"
                            ></img>
                        </div>
                        <div>
                            <h3>Cellullar Automata</h3>
                            <h5>Explanation</h5>
                            <div>
                                This is the main brain behind my simple cellular
                                automata algorithm for Messy Clicker. each cell
                                is iterated through, then updated as seen fit.
                                In the case of Messy Clicker, every particle is
                                applied gravity, then drawn to the grid.
                            </div>
                            <h5>My Thoughts</h5>
                            <div>
                                Going into the project, learning about Cellular
                                Automata was the main focus and I was shocked
                                about how simple it was conceptually. I'd love
                                to work on a longer term project involving
                                giving cells specific "types" like "liquid" or
                                "sand" and attaching differing behaviour to each
                                leading to a "simulation".
                            </div>
                        </div>
                    </div>
                </CarouselItem>
            </Carousel>
        </section>
    );
}
