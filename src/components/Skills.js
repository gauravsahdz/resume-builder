import React from "react";
import { Button } from "react-bootstrap";
import "../css/resumeForm.css";

const Skills = () => {
  function addNewSkill() {
    let newNode = document.createElement("input");
    newNode.classList.add("form-control");
    newNode.classList.add("skField");
    newNode.classList.add("mt-1");
    newNode.setAttribute("placesklder", "Add New Skill");

    let skOb = document.getElementById("sk");
    let skAddButtonOb = document.getElementById("addSkill");

    skOb.insertBefore(newNode, skAddButtonOb);
  }
  return (
    <div className="Skills container box p-5" id="Skill">
      <h1>Skills</h1>
      <div></div>
      <input
        id="textarea-Skills"
        name="textarea"
        className="mb-3 form-control skField"
        cols={50}
        rows="1"
        placesklder="Enter your Skill"
      />
      <div id="sk">
        <Button
          variant="primary"
          className="addBTN"
          id="addSkill"
          onClick={addNewSkill}
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default Skills;
