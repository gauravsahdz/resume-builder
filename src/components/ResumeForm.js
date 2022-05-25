import React from "react";
import Hobbies from "./Hobbies";
import PersonalDetails from "./PersonalDetails";
import Skills from "./Skills";
import SchoolQualification from "./SchoolQualification";
import { Row, Col, Container } from "react-bootstrap";
import Achievements from "./Achievements";
import Project from "./Projects";
import ResumeTemplate from "./ResumeTemplate";
import "../css/resumeForm.css";
import Footer from "./Footer";

const ResumeForm = () => {
  return (
    <>
      <Container fluid id="cv-form">
        <Row>
          <Col>
            <PersonalDetails />
            <SchoolQualification />
            <Skills />
          </Col>

          <Col>
            <Achievements />
            <Project />
            <Hobbies />
            <Footer />
          </Col>
        </Row>
      </Container>

      <Container fluid id="cv-Template">
        <Row>
          <Col>
            <ResumeTemplate />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ResumeForm;
