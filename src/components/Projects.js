import React from "react";
import { Button } from "react-bootstrap";
import "../css/resumeForm.css";

const Projects = () => {
  function addNewProject() {
    let newNode = document.createElement("input");
    newNode.classList.add("form-control");
    newNode.classList.add("prField");
    newNode.classList.add("mt-1");
    newNode.setAttribute("placeholder", "Add New Project");

    let prOb = document.getElementById("pr");
    let prAddButtonOb = document.getElementById("addProject");

    prOb.insertBefore(newNode, prAddButtonOb);
  }
  return (
    <div className="Projects container box p-5" id="project">
      <h1>Projects</h1>
      <div></div>
      <input
        id="textarea-Projects"
        name="textarea"
        className="form-control mb-3 prField"
        cols={50}
        rows="1"
        placeholder="Enter your Project"
      />
      <div id="pr">
        <Button
          variant="primary"
          className="addBTN"
          id="addProject"
          onClick={addNewProject}
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default Projects;
