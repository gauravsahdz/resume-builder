import React from "react";
import "../css/resumeForm.css";
import { Button } from "react-bootstrap";

const Achievements = () => {
  function addNewAchievement() {
    let newNode = document.createElement("input");
    newNode.classList.add("form-control");
    newNode.classList.add("acField");
    newNode.classList.add("mt-1");
    newNode.setAttribute("placeholder", "Add New Achievement");

    let acOb = document.getElementById("ac");
    let acAddButtonOb = document.getElementById("addAchievement");

    acOb.insertBefore(newNode, acAddButtonOb);
  }
  return (
    <div className="Achievements mt-5 p-5 container box" id="Achievement">
      <h1>Achievements</h1>
      <input
        id="textarea-Achievements"
        name="textarea"
        className="mb-3 form-control acField"
        cols={50}
        rows="1"
        placeholder="Enter your Achievement"
      />
      <div id="ac">
        <Button
          className="addBTN"
          variant="primary"
          id="addAchievement"
          onClick={addNewAchievement}
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default Achievements;
