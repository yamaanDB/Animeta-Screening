import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import NormalButton from "../NormalButton/NormalButton";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: "24px 16px 20px 0px",
  },
  "& .MuiDialogActions-root": {
    padding: "21px",
  },
}));

const DeleteModal = ({ visible, modalLabel, handleClose, handleDelete }) => {
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="add-new-property"
        open={visible}
        PaperProps={{ sx: { borderRadius: "16px", padding: "0 16px" } }}
      >
        <DialogContent dividers sx={{ maxWidth: "330px", minHeight: "186px" }}>

          <p id="modal-description" className="fw-600 text-center mt-4">
            {modalLabel}
          </p>
          <div className="d-flex w-100 col-12 justify-content-center my-4 mt-5">
            <div className="col-6 px-3 ">
              <NormalButton
                className={"cancelBtn w-100 "}
                label={"Cancel"}
                onClick={handleClose}
              />
            </div>
            <div className="col-6 px-3">
              <NormalButton
                onClick={handleDelete}
                className={"DeleteBtn w-100 "}
                label={"Delete"}
              />
            </div>
          </div>

        </DialogContent>
      </BootstrapDialog>
    </div>
  );
};

export default DeleteModal;
