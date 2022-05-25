import React from "react";
import { Button } from "react-bootstrap";
import "../css/utilityBtns.css";
import { generateCV } from "./PrintResume";


const UtilityButtons = () => {
    const printCV = () => {
        let divContents = document.getElementById("resumeTemplate").innerHTML;
        let printWindow = window.open("", "", "height=400,width=800");
        printWindow.document.write(divContents);
        printWindow.document.close();
        printWindow.print();
      };
  return (
    <>
      <div className="container btns" >
        <Button variant="danger" className="p-btn " onClick={generateCV}>
          Preview
        </Button>
        <Button variant="dark" className="p-btn" onClick={printCV}>
          Print
        </Button>
      </div>
    </>
  );
};

export default UtilityButtons;
