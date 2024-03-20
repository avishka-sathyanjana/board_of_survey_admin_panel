import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import UpdateDb from "../assets/updatedb2.jpg";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import FileUploader from "./FileUploader";

export default function UpdateAssetsForm() {
  const [years, setYears] = useState([2024,2025,2026,2027]);

  const [selectedYear, setSelectedYear] = useState("2024");
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleFileUpload = (file) => {
    setUploadedFiles((prevFiles) => [...prevFiles, file]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
  };

  return (
    <Grid
      container
      sx={{
        marginTop: 10,
      }}
    >
      <CssBaseline />
      {/* for the imag */}
      <Grid
        item
        xs={12}
        md={5}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <img
          src={UpdateDb}
          alt="Update Assets List"
          style={{ maxWidth: "80%", maxHeight: "auto" }}
        />
      </Grid>

      {/* for the form */}
      <Grid
        item
        md={6}
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container sx={{ width: "100%" }}>
          <Typography component="h1" variant="h5" align="left">
            Update Assets List
          </Typography>
        </Container>

        <Container
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="assets-year-select-label">Year</InputLabel>
                <Select
                  labelId="assets-year-select-label"
                  id="assets-year-select"
                  value={selectedYear}
                  label="Year"
                  onChange={handleYearChange}
                >
                  {years.map((year) => (
                    <MenuItem key={year} value={year}>
                      {year}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="assetPin"
                label="PIN"
                name="pin"
                
              />
            </Grid>

            {/* CSV file uploading input */}

            <Grid item xs={12} md={12}>
              <FileUploader onFileUpload={handleFileUpload} />
            </Grid>

            {/* {uploadedFiles.length > 0 && (
              <Grid item xs={12}>
                <Typography variant="h6">Uploaded Files:</Typography>
                <ul>
                  {uploadedFiles.map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>
              </Grid>
            )} */}

          
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Upload
          </Button>
          
        </Container>
      </Grid>
    </Grid>
  );
}
