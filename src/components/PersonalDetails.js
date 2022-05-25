import React from "react";
import { Button } from "react-bootstrap";

const PersonalDetails = () => {
  return (
    <>
      <div className="container mt-5 p-5">
        <h1>Personal Details</h1>
        <form id="myfrm">
          <div className="form-group">
            <div className="photo-div mt-3 mb-2">
              <div>
                <label>Select Image</label>
              </div>
              <input id="profile-img" type="file" name="image" fluid />
            </div>

            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control mb-3"
              id="name"
              placeholder="Enter name"
            />

            <label htmlFor="name">Profession</label>
            <input
              type="text"
              className="form-control mb-3"
              id="profession"
              placeholder="Enter profession"
            />

            <label htmlFor="name">Profile</label>
            <textarea
              type="textarea"
              className="form-control mb-3"
              id="profile"
              placeholder="say someting about yourself"
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control mb-3"
              id="email"
              placeholder="Enter email"
            />
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              className="form-control mb-3"
              id="phone"
              placeholder="Enter phone"
            />
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control mb-3"
              id="addressOr"
              placeholder="Enter address"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default PersonalDetails;
