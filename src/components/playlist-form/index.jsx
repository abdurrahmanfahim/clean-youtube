import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

const PlaylistForm = ({ open, handleClose, getPlayListId }) => {
  const [state, setState] = useState("");

  const handleSubmit = () => {
    if (!state) {
      alert('Invalid State')
    } else {
      getPlayListId(state)
      setState('')
      handleClose()
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Playlist</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To add a new playlist, please enter the playlist ID or URL. Ensure the
          link is valid to successfully fetch playlist information.
        </DialogContentText>
        <TextField
          autoFocus
          required
          margin="dense"
          label="Playlist ID or URL"
          fullWidth
          variant="standard"
          onChange={(e) => setState(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Add Playlist</Button>
      </DialogActions>
    </Dialog>
  );
};

export default PlaylistForm;
