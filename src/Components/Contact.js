import React from "react";
export default function Contact() {
    return (
        <section id="contact" className="text-white">
            <h2 style={{ justifyContent: "center", display: "flex" }}>
                Contact
            </h2>

            <p style={{ justifyContent: "center", display: "flex" }}>
                Click on your preferred icon to contact me!
            </p>

            <div style={{ justifyContent: "center", display: "flex" }}>
                <a href="https://www.linkedin.com/in/kyle-mcghie/">
                    <img src="./LI-In-Bug.png" width={50} alt="linkedin" />
                </a>
                <a href="https://github.com/ShoujiKanenobu">
                    <img
                        src="./github-mark-white.png"
                        width={50}
                        alt="github"
                    />
                </a>
                <a href="mailto:shoujikanenobu@gmail.com">
                    <img
                        src="./email.png"
                        target="_blank"
                        rel="noreferrer"
                        width={50}
                        alt="email"
                    />
                </a>
            </div>
        </section>
    );
}
