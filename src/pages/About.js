import { Card } from "react-bootstrap";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";

export const About = () => {
  return (
    <>
      <div className="homeCard d-flex justify-content-start align-items-center ms-5 mt-5">
        <Card
          style={{ maxWidth: "900px", minWidth: "390px" }}
          className="homeCardCard bg-transparent d-flex align-items-start"
        >
          <Card.Body>
            <Card.Title className="text-start d-flex justify-content-start gap-5">
              <FontAwesomeIcon icon={faComments} style={{ color: "#183290" }} />
              <p style={{ color: "#183290" }}>
                After 10 years of Human Resources experience, I decided to start
                a new chapter in my life. I've been living in Geneva for two
                years and I'm charting a brand new path for myself in the IT
                industry. Learning and creating new things with what I learned
                has always been at the center of my life.
              </p>
            </Card.Title>
          </Card.Body>
          <Card.Body>
            <Card.Title className="text-start d-flex justify-content-start gap-5">
              <FontAwesomeIcon icon={faComments} style={{ color: "#183290" }} />
              <p style={{ color: "#183290" }}>
                In June 2022, I started taking a full stack web development
                course at HiCoders. I improved my front end HTML, CSS and
                javascript and react skills. In the back end, I improved my node
                js and sql skills. I continue to learn in this big,
                ever-developing world.
              </p>
            </Card.Title>
          </Card.Body>
          <Card.Body>
            <Card.Title className="text-start d-flex justify-content-start gap-5">
              <FontAwesomeIcon icon={faComments} style={{ color: "#183290" }} />
              <p style={{ color: "#183290" }}>
                In this project, it is aimed to make a dynamic application by
                creating both front end and back end. In the front end; HTML,
                CSS and javascript languages, React js and Bootstrap frameworks
                are used. In the back end stage, javascript language and express
                js framework were used on the Node js platform.
              </p>
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
