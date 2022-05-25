import React from "react";
import ResumeForm from "./ResumeForm";
import "../css/resumeForm.css";

const generateCV = () => {
  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-Template").style.display = "block";
  let nameField = document.getElementById("name").value;
  let nameT1 = document.getElementById("nameT1");
  nameT1.innerHTML = nameField;
  document.getElementById("nameT2").innerHTML = nameField;
  document.getElementById("professionT").innerHTML =
    document.getElementById("profession").value;
  document.getElementById("profileT").innerHTML =
    document.getElementById("profile").value;
  document.getElementById("emailT").innerHTML =
    document.getElementById("email").value;
  document.getElementById("contactT").innerHTML =
    document.getElementById("phone").value;
  document.getElementById("addressT").innerHTML =
    document.getElementById("addressOr").value;

  document.getElementById("educationT").innerHTML =
    document.getElementById("education").value;

  let hobbiesB = document.getElementsByClassName("hoField");
  let str = "";
  for (let e of hobbiesB) {
    str = str + `<li>${e.value}</li>`;
  }
  document.getElementById("hobbiesT").innerHTML = str;

  let skillB = document.getElementsByClassName("skField");
  let str3 = "";
  for (let h of skillB) {
    str3 = str3 + `<li>${h.value}</li>`;
  }
  document.getElementById("skillT").innerHTML = str3;

  let projectsB = document.getElementsByClassName("prField");
  let str1 = "";
  for (let f of projectsB) {
    str1 = str1 + `<li>${f.value}</li>`;
  }
  document.getElementById("projectT").innerHTML = str1;

  let AcheivementB = document.getElementsByClassName("acField");
  let str2 = "";
  for (let g of AcheivementB) {
    str2 = str2 + `<li>${g.value}</li>`;
  }
  document.getElementById("achT").innerHTML = str2;

  let file = document.getElementById("profile-img").files[0];
  console.log(file);
  let reader = new FileReader();
  reader.readAsDataURL(file);
  console.log(reader.result);
  reader.onload = function () {
    document.getElementById("profile-imgT").src = reader.result;
  };
};

const PrintResume = () => {
  return (
    <>
      <ResumeForm />
    </>
  );
};

export { generateCV, PrintResume };
