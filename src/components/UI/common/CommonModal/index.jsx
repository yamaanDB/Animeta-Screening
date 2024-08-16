import React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import classes from "./commonModal.module.scss";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: "40px",
  },
  "& .MuiDialogActions-root": {
    padding: "21px",
  },
}));

export default function CommonModal({
  handleClose,
  visible = false,
  children
}) {
  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="add-new-property"
      open={visible}
      maxWidth={"sm"}
      fullWidth
      classes={{
        paper: classes.contentContainer,
      }}
    >
      <DialogContent dividers classes={{ root: classes.contentContainer }}>
        {children}
      </DialogContent>
    </BootstrapDialog>
  );
}
