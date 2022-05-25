import React from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import "../css/resumeTemplate.css";

const ResumeTemplate = () => {
  return (
    <Row id="resumeTemplate">
      <Col sm={4} className=" left background">
        <div className="background">
          {/* first colum */}
          <img
            id="profile-imgT"
            height={200}
            width={200}
            src="https://i.imgur.com/XqQXZ8l.jpg"
            alt="profile"
            className="mt-5"
            fluid
          />
          <div className="Container text-center py-5">
            <p id="nameT1">Gaurav Kumar Sah</p>
            <p id="professionT">Frontend Developer</p>
            <p id="profileT">
              I am a 3rd year student at KIIT University pursuing my B.Tech
              degree in Computer science and Technology.
            </p>
            <p id="emailT">sahgaurav33@gmail.com</p>
            <p id="contactT">+91-9934432446</p>
            <p id="addressT">Kalyanpur-11, Siraha, Nepal</p>
          </div>
        </div>
        <hr />
        <div className="card-header background">
          <h3>Hobbies</h3>
        </div>
        <div className="card-body">
          <ul id="hobbiesT">
            <li>lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
            <li>lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
            <li>lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
          </ul>
        </div>
      </Col>

      <Col sm={8} className=" right py-5">
        {/* second column */}
        <h1 className="text-center " id="nameT2">
          Gaurav Kumar Sah
        </h1>
        <div className="card-header background">
          <h3>Education</h3>
        </div>
        <p id="educationT">
          Schooling from Jansewa Secondary School securing 3.45 GPA in 10th
          Board.
          <br />
          12th from Sagarmatha Secondary School securing 3.03 GPA.
          <br /> B.Tech from KIIT University securing 8.9 CGPA in Computer
          science and Engineering.
          <br />
        </p>

        <div className="card-header background">
          <h3>Acheivements</h3>
        </div>
        <div className="card-body">
          <ul id="achT">
            <li>lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
            <li>lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
            <li>lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
          </ul>
        </div>

        <div className="card-header background">
          <h3>Skills</h3>
        </div>
        <div className="card-body">
          <ul id="skillT">
            <li>lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
            <li>lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
            <li>lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
          </ul>
        </div>

        <div className="card-header background">
          <h3>Projects</h3>
        </div>
        <div className="card-body">
          <ul id="projectT">
            <li>lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
            <li>lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
            <li>lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
          </ul>
        </div>
      </Col>
    </Row>
  );
};

export default ResumeTemplate;
