import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";

function TodoDetails({ todoDetails, openDailog, setOpenDailog }) {
  return (
    <>
      <Dialog open={openDailog}>
        <DialogTitle>{todoDetails?.todo}</DialogTitle>
        <DialogActions>
          <Button onClick={() => setOpenDailog(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default TodoDetails;
