import { Routes, Route, Navigate } from "react-router-dom";
import { Button } from "@mui/material";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Button>Super Botão</Button>} />
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};
