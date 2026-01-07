import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, Container, Link, Stack, IconButton, useMediaQuery, useTheme as useMuiTheme } from "@mui/material";
import { Brightness4, Brightness7, Add } from "@mui/icons-material";
import { forwardRef, useImperativeHandle, useState } from "react";
import PlaylistForm from "../playlist-form";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import processURL from "../../hooks/useURL";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";

const Navbar = forwardRef(({ getPlaylistById }, ref) => {
  const [open, setOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();
  const theme = useMuiTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  useImperativeHandle(ref, () => ({
    openModal: handleClickOpen
  }));

  const handleClose = () => {
    setOpen(false);
  };

  const getPlayListId = (playlistId) => {
    const extractedId = processURL(playlistId);
    getPlaylistById(extractedId);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        color="transparent"
        position="fixed"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
          py: 1,
        }}
      >
        <Container maxWidth={"md"}>
          <Toolbar>
            <Stack>
              <Link
                to={"/"}
                component={RouterLink}
                sx={{ textDecoration: "none", color: "text.primary" }}
              >
                <Typography 
                  variant="h4" 
                  fontWeight={500} 
                  sx={{ 
                    fontSize: { xs: '1.5rem', sm: '2.125rem', md: '2.125rem' },
                    lineHeight: { xs: 0.8, sm: 0.8, md: 0.8 } 
                  }}
                >
                  {isMdUp ? 'CleanYoutube' : <>Clean<br />Youtube</>}
                </Typography>
              </Link>

              <Typography variant="body1" sx={{ display: { xs: "none", md: "block" } }}>
                by{" "}
                <Link
                  href="https://github.com/abdurrahmanfahim"
                  target="_blank"
                  sx={{ textDecoration: "none", color: "text.primary" }}
                >
                  <b>AR Fahim</b>
                </Link>
              </Typography>
            </Stack>
            <Stack sx={{ flexGrow: 1 }}></Stack>

            <IconButton
              to={`/`}
              component={RouterLink}
              color="inherit"
              sx={{ mr: 1 }}
            >
              <HomeIcon />
            </IconButton>

            <IconButton
              to={`/favorites`}
              component={RouterLink}
              color="inherit"
              sx={{ mr: 1 }}
            >
              <FavoriteIcon />
            </IconButton>

            <IconButton onClick={toggleDarkMode} color="inherit" sx={{ mr: 1 }}>
              {darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
            <Button 
              variant="contained" 
              onClick={handleClickOpen}
              sx={{ 
                display: { xs: "none", sm: "flex" }
              }}
            >
              Add Playlist
            </Button>
            <IconButton 
              variant="contained" 
              onClick={handleClickOpen}
              sx={{ 
                display: { xs: "flex", sm: "none" },
                bgcolor: "primary.main",
                color: "primary.contrastText",
                "&:hover": { bgcolor: "primary.dark" }
              }}
            >
              <Add />
            </IconButton>
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
});

export default Navbar;
