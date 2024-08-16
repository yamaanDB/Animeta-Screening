import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import classes from "./imgViewpopup.module.scss";
import ImagePreview from "./ImagePreview";
import DownloadIcon from "assets/icons/download_icon.svg"

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
        padding: "20px 10px 20px 10px",
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

export default function ImageViewerPopup({
    handleClose,
    title,
    initSlide,
    data,
}) {

    const [ currentSlideIndex, setCurrentSlideIndex ] = useState(initSlide)

    const handleDownloadImage = async () => {
        const url = data[currentSlideIndex].url;
        const response = await fetch(url);

        const blobImage = await response.blob();

        const href = URL.createObjectURL(blobImage);

        const anchorElement = document.createElement('a');
        anchorElement.href = href;
        anchorElement.download = data[currentSlideIndex].name;

        document.body.appendChild(anchorElement);
        anchorElement.click();

        document.body.removeChild(anchorElement);
        window.URL.revokeObjectURL(href);
    }

    return (
        <BootstrapDialog
            onClose={() => {}}
            aria-labelledby="img-preview"
            open={true}
            PaperProps={{ sx: { borderRadius: "16px", padding: "0 16px" } }}
        >
            <div className="col-12">
                <div className="d-flex">
                    <Title sx={{ m: 0, p: "20px 0 10px 0" }} id="img-preview">
                        {title}
                    </Title>
                </div>
                <div className="d-flex justify-content-end">
                    {/* <span className="m-1"> 
                    <IconButton
                        aria-label="download"
                        sx={{
                            position: "absolute",
                            top: 10,
                            right: 16,
                            color: (theme) => theme.palette.grey[500],
                        }}
                        style={{ borderRadius: 0 }}
                        onClick={handleClose}
                    >
                        <DownloadIcon style={{ color: "#090909" }} />
                    </IconButton>
                    </span>  */}
                    <IconButton
                        sx={{
                            position: "absolute",
                            right: 64,
                            top: 12,
                            borderRadius: "16px",
                            color: (theme) => theme.palette.grey[500],
                        }}
                        style={{ borderRadius: 0 }}
                        onClick={handleDownloadImage}
                    >
                        <img src={DownloadIcon} alt="download image"/>
                    </IconButton>
                    <IconButton
                        aria-label="close"
                        sx={{
                            position: "absolute",
                            right: 8,
                            top: 8,
                            borderRadius: "16px",
                            color: (theme) => theme.palette.grey[500],
                        }}
                        style={{ borderRadius: 0 }}
                        onClick={handleClose}
                    >
                        <HighlightOffIcon style={{ color: "#090909" }} />
                    </IconButton>

                </div>
            </div>
            <DialogContent dividers sx={{ maxWidth: "400px", maxHeight: "550px" }}>
                <div className={classes.dialogcontent}>
                    <ImagePreview data={data || []} initSlide={initSlide} setCurrentSlideIndex={setCurrentSlideIndex} />
                </div>
            </DialogContent>
        </BootstrapDialog>
    );
}
