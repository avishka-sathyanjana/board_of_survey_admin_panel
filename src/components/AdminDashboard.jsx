import React from "react";
import DashboardCard from "./DashboardCard";
import Box from "@mui/material/Box";
import addUserImg from "../assets/addUser.png";
import addAssetsImg from "../assets/UpdateDatabase.png";
import scanAssetsImg from "../assets/ScanAssets.png";
import viewReportsImg from "../assets/reports.png";

function AdminDashboard() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DashboardCard
        title="Add User"
        addUserImg={addUserImg}
        imageAlt="Add User"
      />

      <DashboardCard
        title="Update Assets List"
        addUserImg={addAssetsImg}
        imageAlt="Update Assets"
      />

      <DashboardCard
        title="Change Board of Survey Year"
        addUserImg={scanAssetsImg}
        imageAlt="Add User"
      />

      <DashboardCard
        title="View Reports"
        addUserImg={viewReportsImg}
        imageAlt="View Reports"
      />
    </Box>
  );
}

export default AdminDashboard;
