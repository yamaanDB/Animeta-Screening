import React from "react";
import NormalButton from "../NormalButton/NormalButton";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import classes from "./deletemodal.module.scss";
import InfoDanger from "assets/icons/infoDanger.svg";
import ViewReasonimg from "assets/icons/ViewReasonImg.svg";
import SubmitedIcon from "assets/icons/submitedIcon.svg";

import CloseIcon from "assets/icons/closeIcon.svg";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: "40px",
  },
  "& .MuiDialogActions-root": {
    padding: "21px",
  },
}));

export default function DeleteModal({
  handleClose,
  handleDelete,
  label = "Delete",
  description = "",
  visible = false,
  showFutureDesc = false,
  futureDescription = "",
  deleteModal = true,
  ReasonDescription = "",
  handleClick = () => {},
  PropertySubmited = false,
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
        {deleteModal ? (
          <>
            <div className={classes.dialogcontent}>{description}</div>
            {showFutureDesc && (
              <div className={classes.dialogcontentDesc}>
                <img src={InfoDanger} />
                {futureDescription}
              </div>
            )}
            <div className={classes.buttongroup}>
              <NormalButton
                className={classes.cancelBtn}
                label="Cancel"
                onClick={handleClose}
              />
              <NormalButton
                className={classes.deleteBtn}
                label={label}
                onClick={handleDelete}
              />
            </div>
          </>
        ) : PropertySubmited ? (
            <div className={classes.reasonContent}>
              <img src={SubmitedIcon} />
              <div className={classes.reasonlabel}>
                Property Details submitted!
              </div>
              <div className={classes.approvedStyle}>
                You will be notified once the property details are approved.
              </div>
              <NormalButton
                label="Ok"
                className={`${classes.okBtn}  submitBtn`}
                onClick={handleClick}
              />
            </div>
        ) : (
          <div className={classes.reasonContent}>
            <img
              src={CloseIcon}
              alt="close"
              className={classes.closeIcon}
              onClick={handleClose}
            />
            <img src={ViewReasonimg} />
            <div className={classes.reasonlabel}>Reason for Rejection</div>
            <div className={classes.reasonDescription}>{ReasonDescription}</div>
          </div>
        )}
      </DialogContent>
    </BootstrapDialog>
  );
}
