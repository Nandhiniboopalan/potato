import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteDonor } from "../features/usersSlice";
import "./User.css";
import DeleteIcon from "@mui/icons-material/Delete";
function UserList() {
  const donors = useSelector((state) => state.donors);
  const dispatch = useDispatch();

  const handleDelete = (donor) => {
    dispatch(deleteDonor(donor));
  };

  return (
    <>
      <h2 style={{ position: "absolute", right: "385px", top: "80px" }}>
        User List
      </h2>
      <div className="userlist">
        <br></br>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile Number</th>
              <th>Password</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {donors.map((donor) => (
              <tr key={donor.id}>
                <td>{donor.name}</td>
                <td>{donor.Email}</td>
                <td>{donor.mobileNumber}</td>
                <td>{donor.password}</td>
                <td>{donor.age}</td>
                <td>
                  <DeleteIcon onClick={() => handleDelete(donor)}></DeleteIcon>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UserList;
