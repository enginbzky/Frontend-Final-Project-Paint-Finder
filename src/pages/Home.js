import { Card, Image, Nav } from "react-bootstrap";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../assets/logo-resim.png";
import logoName from "../assets/logo-isim.png";
import slogan from "../assets/logo-slogan.png";
import LoginButton from "../registration/LoginButton";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";

export const Home = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    <>
      <div className="homeCard d-flex justify-content-start align-items-center ms-5">
        <Card
          style={{ maxWidth: "800px", minWidth: "390px" }}
          className="homeCardCard text-center bg-transparent "
        >
          <Card.Body>
            <Image src={logo} alt="logo" />
          </Card.Body>
          <div>
            {!isAuthenticated ? (
              <>
                <Card.Body>
                  <Image
                    src={logoName}
                    alt="logoName"
                    className="p-0"
                    style={{ maxWidth: "500px", maxHeight: "100px" }}
                  />
                </Card.Body>
                <Card.Body>
                  <Image src={slogan} alt="slogan" className="p-0" />
                </Card.Body>
                <Card.Body>
                  <LoginButton />
                </Card.Body>
                <Card.Body>
                  <Card.Title>
                    <p style={{ color: "#183290" }}>
                      Super simple way to find out your proper yacht paint
                    </p>
                  </Card.Title>
                </Card.Body>
                <Card.Body>
                  <Card.Title>
                    <p style={{ color: "#183290" }}>
                      Thanks to this application, you can find out the
                      antifouling paint that is suitable for your yacht with
                      just a few clicks.
                      <br />
                      <br /> All you have to do is create an account and select
                      the information about your yacht. At the end of the
                      application, paints of two different brands (International
                      Paint and Tekno Marin) will be recommended.
                    </p>
                  </Card.Title>
                </Card.Body>
              </>
            ) : (
              <>
                <h1 style={{ color: "#183290" }}>Welcome {user.name}</h1>
                <p style={{ color: "#183290" }}>
                  By pressing the "Start" button, you can immediately determine
                  which paint you need.
                </p>
                <Button variant="primary" size="lg">
                  <Nav.Link as={NavLink} to="/paintFinder">
                    Start
                  </Nav.Link>
                </Button>
              </>
            )}
          </div>
        </Card>
      </div>
    </>
  );
};
