import React from "react";
import Typography from "@mui/material/Typography";
import AddUserForm from "../components/AddUserForm";
function AddUser() {
  return (
    <>
      {/* <Typography
        variant="h4"
        style={{
          textAlign: "center",
          margin: "20px 0",
        }}
      >
        Add User
      </Typography> */}

      <AddUserForm />
    </>
  );
}

export default AddUser;
