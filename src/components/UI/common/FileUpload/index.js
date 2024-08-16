import React, { useRef, useState } from "react";
// images and Svg
import { Upload } from "@mui/icons-material";

const FileUpload = ({ handleFile }) => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    handleFile(selectedFile);
    setFileName(selectedFile?.name);
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "44px",
        borderRadius: "6px",
        border: "1px solid #A0A0A0",
        display: "flex",
        justifyContent: "space-between",
        padding: "12px 0px 12px 12px",
        backgroundColor: "#FFFFFF",
        color: "#A0A0A0",
        boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.12)",
        cursor: "pointer",
        position: "relative",
      }}
    >
      <input
        type="file"
        style={{ display: "none" }}
        placeholder="Upload"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=" .pdf,.xlsx,docs,"
      />
      <div
        style={{
          position: "absolute",
          top: "0",
          right: "0",
          background: "#367BBF",
          borderRadius: "6px",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "6px 16px",
        }}
        onClick={handleClick}
      >
        <img src={Upload} alt="" />
        &nbsp;&nbsp;
        <span style={{ color: "#F8F9FD" }}>Upload File</span>
      </div>
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          display: "flex",
          alignItems: "center",
          padding: "10px",
          height: "100%",
        }}
      >
        {fileName ? fileName.slice(0, 21) + "..." : "Upload"}
      </div>
    </div>
  );
};

export default FileUpload;
