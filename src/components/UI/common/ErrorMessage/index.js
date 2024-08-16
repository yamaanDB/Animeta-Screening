/* eslint-disable react/prop-types */
import { ErrorOutlineOutlined } from "@mui/icons-material";
import React from "react";

const FormErrorMessage = ({ error, type, messages, icon = false, position = "", className = "" }) => {
  if (!error) return null;
  return (
    <span
      className={`text-danger d-flex align-items-center fs-12 fw-500 ${className || ""}`}
      style={{
        textTransform: "",
        position,
        marginTop: position === "absolute" ? "4px" : 0
      }}>
      {messages[error.type] ? <>{icon && <ErrorOutlineOutlined fontSize="12px" />} {messages[error.type]}</> : <>{icon && <ErrorOutlineOutlined />} Error in field</>}
    </span>
  );
};
export default FormErrorMessage;
