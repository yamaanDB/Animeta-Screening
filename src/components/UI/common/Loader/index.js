import React from "react";
// services
import ClipLoader from "react-spinners/ClipLoader";
import { Backdrop } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import { CircularProgress } from "@mui/material";


const useStyles = makeStyles((theme) => ({
  backdrop: {
    backgroundColor: 'transparent',
  },
  circularProgress: {
    color:"black"
  },
}));

// eslint-disable-next-line react/prop-types
const Loader = ({ loading, className }) => {
  const classes = makeStyles();
  return (
    <div className={className}>
      <ClipLoader
        color={classes.circularProgress}
        loading={loading}
        size={40}
      // css={override}
      />
    </div>
  );
};

export const InitialLoader = () => {
  const classes = useStyles();

  return (
    <Backdrop className={classes.backdrop} open>
        <CircularProgress size={50} color={"inherit"} />
    </Backdrop>
  );
};

export default Loader;
