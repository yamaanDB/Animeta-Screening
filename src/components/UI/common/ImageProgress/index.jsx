import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useRef,
} from "react";
import axios from "axios";
import CircularProgressBar from "components/UI/common/CirclularProgressBar";
import DeleteIcon from "assets/icons/deleteRedIcon.svg";
import styles from "./imageprogress.module.scss";
import DocumentIcon from "assets/icons/documentIcon.svg";
import { useEffect } from "react";
import { sleep } from "Constants/helperFunctions";
import { uploadImagesAndDocuments } from "service/uploadPhotoAndDocuments.";
import { endpoints } from "Constants/api";
import DownloadIcon from "assets/icons/download_icon.svg"

const ImageProgress = forwardRef(
  (
    {
      handleDelete,
      files = [],
      docfiles = [],
      componentFor = "photos",
      handleGetData = () => { },
      setImagePreview = () => { },
      showPreview = false
    },
    ref
  ) => {
    useImperativeHandle(
      ref,
      () => {
        return {
          uploadForm,
          docUploadForm,
          responseData,
        };
      },
      []
    );

    const {
      isSuccess,
      uploadForm,
      progress,
      status,
      isLoading,
      source,
      responseData,
    } = useUploadForm(
      endpoints.uploadImageAndDocuments.UPLOAD_IMAGES_AND_DOCUMENTS
    );
    const {
      isSuccess: isDocSucces,
      uploadForm: docUploadForm,
      progress: docProgress,
      status: docStatus,
      isLoading: docIsLoading,
      source: docSource,
      responseData: docsource,
    } = useUploadForm(
      endpoints.uploadImageAndDocuments.UPLOAD_IMAGES_AND_DOCUMENTS
    );

    const [showFiles, setShowFiles] = useState(false);

    useEffect(() => {
      sleep(100);
      setShowFiles(true);
      // const timeout = setTimeout(async () => {
      //   await setShowFiles(true);
      // }, 500);
      return () => {
        setShowFiles(false);
        //clearTimeout(timeout);
      };
    }, [docfiles]);

    const handleDocDownload = async (doc) => {
        const response = await fetch(doc.url);

        const blobImage = await response.blob();

        const href = URL.createObjectURL(blobImage);

        const anchorElement = document.createElement('a');
        anchorElement.href = href;
        anchorElement.download = doc.name;

        document.body.appendChild(anchorElement);
        anchorElement.click();

        document.body.removeChild(anchorElement);
        window.URL.revokeObjectURL(href);
    }

    const cancelUpload = () => { };
    useEffect(() => {
      handleGetData(responseData, docsource);
      // handleDocGetData(docsource);
    }, [responseData, docsource]);

    const humanFileSize = (bytes, si = false, dp = 1) => {
      const thresh = si ? 1000 : 1024;

      if (Math.abs(bytes) < thresh) {
        return bytes + " B";
      }

      const units = si
        ? ["kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
        : ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
      let u = -1;
      const r = 10 ** dp;

      do {
        bytes /= thresh;
        ++u;
      } while (
        Math.round(Math.abs(bytes) * r) / r >= thresh &&
        u < units.length - 1
      );

      return bytes.toFixed(dp) + " " + units[u];
    };
    return (
      <div className={componentFor === "photos" ? `${styles.preview} ${showPreview && "mt-4"}`: ""}>
        {componentFor === "photos" ? (
          files.map((uri, i) => {
            const show = files.length - 1 === i;

            return (
              <div key={uri} className={styles.previewProgress}>
                <div className={styles.previewWrap}>
                  {!isLoading && !showPreview && (
                    <img
                      className={styles.deleteIcon}
                      src={DeleteIcon}
                      alt="delete icon"
                      onClick={() => handleDelete(i)}
                    />
                  )}
                  <img
                    src={
                      uri.url ? `https://images.weserv.nl?url=${uri.url}` : uri
                    }
                    className={styles.previewimage}
                    alt="Img"
                    onClick={() => setImagePreview(i)}
                  />
                  {isLoading && show && (
                    <>
                      <div className={styles.progressbar}>
                        <CircularProgressBar
                          sqSize={49}
                          strokeWidth={3}
                          percentage={progress}
                        />
                      </div>
                      <a className={styles.cancelBtn} onClick={cancelUpload}>
                        Cancel Upload
                      </a>
                    </>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <div className={`col-12 py-1 ${showPreview && styles.docWrap}`}>
            {docfiles.length > 0 &&
              docfiles !== undefined &&
              docfiles.map((doc, i) => {
                const size = humanFileSize(doc?.size);
                const show = docfiles.length - 1 === i;
                return (
                  <div key={doc} className={` row ${styles.doc}`}>
                    <div className="col-8 p-0 d-flex align-items-center">
                      {doc?.documentType && (
                        <span className={styles.docType}>
                          {doc?.documentType}
                        </span>
                      )}
                      <img
                        className={styles.docIcon}
                        src={DocumentIcon}
                        alt="document icon"
                      />

                      <span className={styles.docText}>{doc?.name || ""}</span>
                    </div>
                    <div className="col-4 p-0 d-flex align-items-center">
                      {/* <div className={styles.size}>
                        <span className={styles.sizetext}>Size:</span>{" "}
                        {size ? size : doc?.size}
                      </div> */}
                      {!showPreview && (
                        <img
                          className={styles.deleteIcon}
                          src={DeleteIcon}
                          alt="delete icon"
                          onClick={() => handleDelete(i)}
                        />
                      )}
                      {showPreview && (
                        <div className={styles.downloadIconWrap}>
                          <img
                            className={styles.downloadIcon}
                            src={DownloadIcon}
                            alt="Download icon"
                            onClick={() => handleDocDownload(doc)}
                          />
                        </div>
                      )}
                      {docIsLoading && show && (
                        <div className={styles.progressbar}>
                          <CircularProgressBar
                            sqSize={33}
                            strokeWidth={3}
                            percentage={docProgress}
                            fontSize={"12px"}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    );
  }
);

ImageProgress.displayName = "ImageProgress";

export const useUploadForm = (url) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [responseData, setresponseData] = useState([]);

  const source = useRef(axios.CancelToken.source());

  const uploadForm = async (formData) => {
    setIsLoading(true);
    try {
      await axios
        .post(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            const percentage = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setProgress(percentage);
          },
          cancelToken: source.token,
        })
        .then((response) => {
          const name = response?.data?.data[0]?.filename;
          const path = response?.data?.data[0]?.path;
          const size = response?.data?.data[0]?.size;
          const documentType = response?.data?.data[0]?.fieldname;

          setresponseData((prev) => [
            ...prev,
            { name, path, size, documentType },
          ]);
          setIsLoading(false);
        });
    } catch (err) {
      if (axios.isCancel(err)) {
      }
      setStatus("Upload Failed");
      setIsLoading(false);
    }
    await new Promise((resolve) => {
      setTimeout(() => resolve("success"), 500);
    });
    setIsSuccess(true);
    setProgress(0);
  };

  return {
    uploadForm,
    isSuccess,
    progress,
    isLoading,
    status,
    source,
    responseData,
  };
};

export default ImageProgress;
