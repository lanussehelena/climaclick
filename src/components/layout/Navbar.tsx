import {
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6">
          Clima Dashboard
        </Typography>

        <div>
          <Button
            color="inherit"
            component={Link}
            to="/"
          >
            Home
          </Button>

          <Button
            color="inherit"
            component={Link}
            to="/favoritos"
          >
            Favoritos
          </Button>

          <Button
            color="inherit"
            component={Link}
            to="/sobre"
          >
            Sobre
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}