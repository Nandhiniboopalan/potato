import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addDonor } from "../features/usersSlice";
import "./User.css";

function AddUser() {
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    Email: "",
    mobileNumber: "",
    password: "",
    age: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDonorInfo({
      ...donorInfo,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const id = Date.now();

    const donor = { ...donorInfo, id };

    dispatch(addDonor(donor));

    setDonorInfo({
      name: "",
      Email: "",
      mobileNumber: "",
      password: "",
      age: "",
    });
  };

  return (
    <div className="adduser">
      <form>
        <h2 style={{ textAlign: "center" }}>Add User</h2>
        <div>
          {/* <label htmlFor="name">Name:</label> */}
          <input
            type="text"
            // id="name"
            placeholder="UserName"
            name="name"
            value={donorInfo.name}
            onChange={handleChange}
          />
        </div>
        <div>
          {/* <label htmlFor="age">Age:</label> */}
          <input
            type="text"
            placeholder="Age"
            // id="age"
            name="age"
            value={donorInfo.age}
            onChange={handleChange}
          />
        </div>
        <div>
          {/* <label htmlFor="bloodGroup">Email:</label> */}
          <input
            type="email"
            placeholder="Email"
            name="Email"
            value={donorInfo.Email}
            onChange={handleChange}
          />
        </div>
        <div>
          {/* <label htmlFor="address">Password:</label> */}
          <input
            type="password"
            // id="address"
            name="password"
            placeholder="Password"
            value={donorInfo.password}
            onChange={handleChange}
          />
        </div>
        <div>
          {/* <label htmlFor="mobileNumber">Mobile Number:</label> */}
          <input
            type="text"
            // id="mobileNumber"
            name="mobileNumber"
            placeholder="MobileNumber"
            value={donorInfo.mobileNumber}
            onChange={handleChange}
          />
        </div>
        <br></br>
        <button type="button" onClick={handleSubmit}>
          Add User
        </button>
      </form>
    </div>
  );
}

export default AddUser;
