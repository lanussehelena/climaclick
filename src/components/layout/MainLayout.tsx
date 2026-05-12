import { Outlet } from "react-router-dom";

import { Container } from "@mui/material";

import Navbar from "./Navbar";

export default function MainLayout() {
  return (
    <>
      <Navbar />

      <Container sx={{ mt: 4 }}>
        <Outlet />
      </Container>
    </>
  );
}