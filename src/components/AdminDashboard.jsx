import React from "react";
import DashboardCard from "./DashboardCard";
import Grid from "@mui/material/Grid";
import addUserImg from "../assets/addUser.png";
import addAssetsImg from "../assets/UpdateDatabase.png";
import scanAssetsImg from "../assets/ScanAssets.png";
import viewReportsImg from "../assets/reports.png";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function AdminDashboard() {
  return (
    <Container maxWidth="lg">
    <Typography variant="h4" sx={{
      marginBottom: 2,
      marginLeft:5
    }}>
        Admin Dashboard
      </Typography>

      <Grid 
        container 
        rowSpacing={2} 
        columnSpacing={2} 
        alignItems="center"
        justifyContent="center"
        >

        <Grid item>
          <DashboardCard
            title="Add User"
            addUserImg={addUserImg}
            imageAlt="Add User"
          />
        </Grid>

        <Grid item>
          <DashboardCard
            title="Update Assets List"
            addUserImg={addAssetsImg}
            imageAlt="Update Assets"
          />
        </Grid>

        <Grid item>
          <DashboardCard
            title="Change Board of Survey Year"
            addUserImg={scanAssetsImg}
            imageAlt="Add User"
          />
        </Grid>

        <Grid item>
          <DashboardCard
            title="View Reports"
            addUserImg={viewReportsImg}
            imageAlt="View Reports"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default AdminDashboard;
