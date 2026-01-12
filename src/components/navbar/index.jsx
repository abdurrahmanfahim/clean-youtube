import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, Container, Link, Stack } from "@mui/material";
import { useState } from "react";
import PlaylistForm from "../playlist-form";
import { Link as RouterLink } from "react-router-dom";

const Navbar = ({ getPlaylistById }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getPlayListId = (playlistId) => {
    getPlaylistById(playlistId);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="default" sx={{ py: 2 }}>
        <Container maxWidth={"lg"}>
          <Toolbar>
            <Stack sx={{ flexGrow: 1 }}>
              <Link
                to={"/"}
                component={RouterLink}
                sx={{ textDecoration: "none", color: "black" }}
              >
                <Typography variant="h4">Clean Youtube</Typography>
              </Link>
              <Link
                href="https://github.com/abdurrahmanfahim"
                target="_blank"
                sx={{ textDecoration: "none", color: "black" }}
              >
                <Typography variant="body1">by AR Fahim</Typography>
              </Link>
            </Stack>
            <Button variant="contained" onClick={handleClickOpen}>
              Add Playlist
            </Button>
            <PlaylistForm
              open={open}
              handleClose={handleClose}
              getPlayListId={getPlayListId}
            />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
