import React, { useState } from "react";
import NormalButton from "../NormalButton/NormalButton";
import { styled } from "@mui/material/styles";
import { useForm, useFieldArray } from "react-hook-form";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RedDeleteIcon from "assets/icons/redDeleteIcon.svg";
import InputBox from "../InputBox/InputBox";
import classes from "./AddPropertyModal.module.scss";
import FormErrorMessage from "../ErrorMessage";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: "24px 16px 20px 0px",
  },
  "& .MuiDialogActions-root": {
    padding: "21px",
  },
}));

const Title = styled(DialogTitle)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 700,
  lineHeight: "24px",
  color: "#090909",
  fontFamily: "Inter",
}));

export default function CustomizedDialogs({
  handleClose,
  onSubmit,
  title,
  options,
  inputPlaceholder = "Enter value",
  inputType,
  newOptions = []
}) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      fieldArray: [{ name: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "fieldArray",
  });

  const handleAdd = (form) => {
    const i = form.fieldArray.length - 1;
    const value = form.fieldArray[i].name;
    const isDup = options.some((o) => String(o.label).toUpperCase() === String(value).toUpperCase()) || newOptions.some((o) => o.label === value);
    const isDupinFields = form.fieldArray.some(
      (field, j) => j !== i && String(field.name).toUpperCase() === String(value).toUpperCase()
    );
    if (isDup || isDupinFields) {
      setError(`fieldArray[${i}].name`, {
        type: "checkdup",
      });
    } else {
      if (value === "0") {
        setError(`fieldArray[${i}].name`, {
          type: "zero",
        });
      } else {
        append({ name: "" });
      }
    }
  };

  const handleDelete = (i) => {
    remove(i)
  }

  const handleOnSubmit = async (form) => {
    const i = form.fieldArray.length - 1;
    const value = form.fieldArray[i].name;
    const isDup = options.some((o) => String(o.label).toUpperCase().trim() === String(value).toUpperCase().trim()) || newOptions.some((o) => o.label === value);
    const isDupinFields = form.fieldArray.some(
      (field, j) => j !== i && String(field.name).toUpperCase().trim() === String(value).toUpperCase().trim()
    );
    const isZeroExist = form.fieldArray.some(
      (field, j) => field.name === "0"
    );

    if (isDup || isDupinFields) {
      setError(`fieldArray[${i}].name`, {
        type: "checkdup",
      });
    } else {
      if (isZeroExist) {
        setError(`fieldArray[${i}].name`, {
          type: "zero",
        });
      } else {
        onSubmit(form);
      }
    }

    // let isDup = false;
    // await options.forEach((o) => {
    //   const index = form.fieldArray.findIndex(
    //     (field) => field.name === o.label
    //   );
    //   if (index !== -1) {
    //     setError(`fieldArray[${index}].name`, {
    //       type: "checkdup",
    //     });
    //     isDup = true;
    //   }
    // });
    /* if (!isDup) {
        form.fieldArray.forEach((f) => {
          const index = form.fieldArray.findIndex((o) => o.name === f.name);
          if(index !== -1){
            isDup = true
          }
        });
    } */
    // if (!isDup) {
    //   onSubmit(form);
    // }
  };

  return (
    <>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="add-new-property"
        open={true}
        PaperProps={{ sx: { borderRadius: "16px", padding: "0 16px" } }}
      >
        <Title sx={{ m: 0, p: "24px 0" }} id="add-new-property">
          {title}
        </Title>
        <IconButton
          aria-label="close"
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
          style={{ borderRadius: 0 }}
          onClick={handleClose}
        >
          <HighlightOffIcon style={{ color: "#090909" }} />
        </IconButton>
        <DialogContent dividers sx={{ minWidth: "394px", minHeight: "186px" }}>
          <div className={classes.dialogcontent}>
            {fields.map((field, i) => {
              const showAddIcon = fields.length - 1 === i;
              const showDeleteIcon = fields.length - 1 !== i;
              const showAddDeleteIcon = fields.length !== 1;
              const { onChange, ...rest } = register(`fieldArray.${i}.name`, {
                required: true,
                ...(inputType === "number" ? { maxLength: 2 } : {}),
                validate: {
                  ...(inputType === "text"
                    ? {
                      checkstring: (value) => {
                        if (value) {
                          return /^(?!\s+$)[A-Za-z\s]*$/.test(value);
                        }
                        return true;
                      },
                    }
                    : {}),
                },
              });
              return (
                <div key={field.id}>
                  <div
                    className={`${classes.inputContainer}`}
                  >
                    <div className="d-flex col-12">
                      <div className="col-7">
                        <InputBox
                          register={rest}
                          onChange={onChange}
                          isError={!!errors.fieldArray?.[i]?.name}
                          showSuccessBorder={!showAddIcon}
                          isPropertySubmitted={!showAddIcon}
                          placeholder={"Enter value"}
                          type={inputType}
                          inputClass={classes.input}
                        />
                      </div>
                      <div className="col-5">
                        <div className="d-flex justify-content-start ms-3">
                          {showAddIcon && (
                            <IconButton
                              className={classes.iconbtn}
                              onClick={handleSubmit(handleAdd)}
                            >
                              <AddCircleOutlineIcon className={classes.circleAdd} />
                            </IconButton>
                          )}
                          {showDeleteIcon && (
                            <IconButton
                              className={classes.deleteIconBtn}
                              onClick={() => handleDelete(i)}
                              style={{ marginLeft: "57px" }}
                            >
                              <img
                                className={classes.circleDelete}
                                src={RedDeleteIcon}
                                alt="delete icon"
                              />
                            </IconButton>
                          )}
                          {showAddDeleteIcon && !showDeleteIcon && (
                            <IconButton
                              className={`${classes.deleteIconBtn}`}
                              onClick={() => handleDelete(i)}
                              style={{ marginLeft: "10px" }}
                            >
                              <img
                                className={classes.circleDelete}
                                src={RedDeleteIcon}
                                alt="delete icon"
                              />
                            </IconButton>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <FormErrorMessage
                    error={errors.fieldArray?.[i]?.name}
                    messages={{
                      required: inputPlaceholder,
                      checkdup: "Value already exist.",
                      checkstring: "Invalid",
                      zero: "Invalid",
                      maxLength: "Should contain maximum of 2 digits"
                    }}
                  />
                </div>
              );
            })}
          </div>
        </DialogContent>
        <DialogActions>
          <NormalButton
            className={classes.saveBtn}
            onClick={handleSubmit(handleOnSubmit)}
            label="Add"
          />
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}
