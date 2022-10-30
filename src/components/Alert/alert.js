import { Snackbar, Slide } from "@mui/material";
import MuiAlert from '@mui/material/Alert';
import React from 'react'

const SnackBar = ({ show, level, message, onClose }) => {

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
  }

  return (
    <Snackbar open={show} autoHideDuration={6000}  TransitionComponent={SlideTransition} onClose={onClose}>
      <Alert severity={level || 'info'} sx={{ width: "100%" }} onClose={onClose}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackBar;
