import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import Spinner from '../Spinner/Spinner';

///Aby użyć -> <Backdrop open={"true"}/>


const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function SimpleBackdrop(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(props.open);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <Spinner/>
      </Backdrop>
    </div>
  );
}