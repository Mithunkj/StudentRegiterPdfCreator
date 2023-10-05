import React, { useState } from "react";
import axios from "axios";

function StudentForm() {
  const [name, setName] = useState();
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [qulification, setQulification] = useState("");
  const [address, setAddress] = useState("");
  const [photo, setPhoto] = useState("");
  const [url, setUrl] = useState("");
  const [display, setDisplay] = useState(false);
  const formSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("mobile", mobile);
    formData.append("email", email);
    formData.append("qulification", qulification);
    formData.append("address", address);
    formData.append("photo", photo);

    const res = await axios.post("http://localhost:8000/registr", formData);
    const resData = await res.data;
    console.log(resData.data);
    setUrl(resData.data);
    setTimeout(() => {
      alert("Student Regitrered");
      setDisplay(true);
    }, 2000);
  };

  return (
    <div className="container mt-5">
      <form
        onSubmit={formSubmit}
        className="col-lg-5 col-md-6  m-auto border p-5 "
      >
        <h3>Registration Form</h3>
        <div className="mb-3">
          <label for="" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label for="" className="form-label">
            Mobile
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Mobile"
            onChange={(e) => {
              setMobile(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label for="" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label for="" className="form-label">
            Qulification
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Qulification"
            onChange={(e) => {
              setQulification(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label for="" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Address"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label for="" className="form-label">
            Add your Image
          </label>
          <input
            type="file"
            className="form-control"
            placeholder="Add Your Image"
            onChange={(e) => {
              setPhoto(e.target.files[0]);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
        <div class={display === true ? "d-block" : "d-none"}>
          <a
            href={url}
            target="_blank"
            className="btn btn-light  w-100 mt-2"
            download
          >
            Download
          </a>
        </div>
      </form>
    </div>
  );
}

export default StudentForm;
