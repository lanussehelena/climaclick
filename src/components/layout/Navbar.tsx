import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container
} from "@mui/material";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    // O AppBar sem Container por fora garante que o azul vá de ponta a ponta
    <AppBar position="static" sx={{ backgroundColor: '#1976d2', width: '100%' }}>
      <Container maxWidth="lg"> 

        {/* O Container aqui dentro mantém o texto e botões alinhados ao conteúdo do resto do site */}
      <Toolbar
      disableGutters
        sx={{
          display: "flex",
          flexDirection:{xs: "column", md: "row"},
          alignItems: "center",
          justifyContent: "space-between",
          py: {xs: 1.5, sm: 0},
          gap: {xs:1, md: 0 }
        }}
      >
        <Typography variant="h6"
        component="div"
        sx={{fontWeight: "bold",
          fontSize: {xs: "1.1rem" , sm: "1.25rem"}
        }}>
          Clima Dashboard
        </Typography>

        <Box sx={{ display: "flex", gap: {xs: 1, sm: 2} }}>
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
        </Box>
      </Toolbar>
      </Container>
    </AppBar>
  );
}