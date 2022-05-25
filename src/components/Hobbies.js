import React from "react";
import { Button } from "react-bootstrap";
import "../css/resumeForm.css";

const Hobbies = () => {
  function addNewHobbie() {
    let newNode = document.createElement("input");
    newNode.classList.add("form-control");
    newNode.classList.add("hoField");
    newNode.classList.add("mt-1");
    newNode.setAttribute("placeholder", "Add New Hobbie");

    let hoOb = document.getElementById("ho");
    let hoAddButtonOb = document.getElementById("addHobbie");

    hoOb.insertBefore(newNode, hoAddButtonOb);
  }
  return (
    <div className="Hobbies container box p-5" id="Hobbie">
      <h1>Hobbies</h1>
      <div></div>
      <input
        id="textarea-Hobbies"
        name="textarea"
        className="mb-3 form-control hoField"
        cols={50}
        rows="1"
        placeholder="Enter your Hobbie"
      />
      <div id="ho">
        <Button
          variant="primary"
          className="addBTN"
          id="addHobbie"
          onClick={addNewHobbie}
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default Hobbies;
