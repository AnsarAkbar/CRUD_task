import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';  

export default function AlertDialog({delItemId,productList,setProductList,setAlertDialog,alertDialog}) {
  const [open, setOpen] = React.useState(true);
      // console.log(productList[delItemId])
  const handleClose = () => {
    setAlertDialog(!alertDialog)
  };
  const handleDelete=()=>{
    setAlertDialog(!alertDialog)
    setProductList(productList.filter((_,index)=>delItemId!==index))
  }

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to delete {productList[delItemId].name}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className='cursor-pointer'>Cancle</Button>
          <Button onClick={handleDelete} autoFocus className='cursor-pointer'>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
