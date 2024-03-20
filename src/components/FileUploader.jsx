import React, { useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import * as xlsx from "xlsx";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";



const FileUploader = ({ onFileUpload }) => {
  const [excelFile, setExcelFile] = useState(null);
  const [jsonData, setJsonData] = useState(null);
  const [isLoading, setIsLoading] = useState(false); //for loading spinner


  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setExcelFile(file);
  };

  const convertToJson = () => {
    if (excelFile) {
      setIsLoading(true);
     
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = xlsx.read(data, { type: "binary" });

        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonArray = xlsx.utils.sheet_to_json(worksheet, {
          header: 1,
          defval: "",
        });

        //extracting header
        const headerRow = jsonArray.shift();

        //converting the rest of the data to json as key value pairs
        const jsonData = jsonArray.map((row) => {
          return row.reduce((obj, value, index) => {
            obj[headerRow[index]] = value;
            return obj;
          }, {});
        });
        setJsonData(jsonData);
        onFileUpload(jsonData);
        setIsLoading(false);
        
      };
     
      reader.readAsBinaryString(excelFile);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
      <Typography variant="h7" gutterBottom>
        Upload spreadsheet file
      </Typography>
      <input type="file" accept=".xlsx,.xls" onChange={handleFileUpload} />

      {/* Show loading indicator and progress bar if isLoading is true */}
      {isLoading && (
        <Box
          sx={{
            mt: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CircularProgress />

        </Box>
      )}

      {/* if its an excel file, the buton will appear and when the json data is full, it will disapewar */}
      {excelFile && !jsonData?.length && !isLoading && (
        <Button variant="contained" onClick={convertToJson} sx={{ mt: 2 }}>
          Convert to JSON
        </Button>
      )}
      {jsonData && (
        <Box sx={{ mt: 2, minWidth: "100%" }}>
          <Typography variant="h7">JSON Data:</Typography>
          <TextField
            multiline
            rows={4}
            value={JSON.stringify(jsonData, null)}
            variant="outlined"
            fullWidth
            InputProps={{
              readOnly: true,
            }}
          />
        </Box>
      )}

      {/* a formated way for testing */}
      {/* {jsonData && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6">JSON Data:</Typography>
          <pre>{JSON.stringify(jsonData, null, 2)}</pre>
        </Box>
      )} */}
    </Box>
  );
};

export default FileUploader;
