import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import LeftSideNav from "../Pages/Shared/LeftSideNav/LeftSideNav";
import RightSIdeNav from "../Pages/Shared/RightSideNav/RightSIdeNav";

const Main = () => {
  return (
    <div>
      <div>
        <Header></Header>
        <Container>
          <Row>
            <Col lg="2" className="d-none d-lg-block">
              <LeftSideNav></LeftSideNav>
            </Col>
            <Col lg="7">
              <Outlet></Outlet>
            </Col>
            <Col lg="3" className="d-none d-lg-block">
              <RightSIdeNav></RightSIdeNav>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="mt-3">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
