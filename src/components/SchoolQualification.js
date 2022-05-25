import React from "react";

const SchoolQualification = () => {
  return (
    <>
      <div className="container p-5">
        <h1>Education</h1>
        <form id="myfrm">
          <div className="form-group">
            <textarea
              className="form-control"
              id="education"
              placeholder="Enter academic qualification"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default SchoolQualification;
