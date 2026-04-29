// Layout.tsx
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar/Sidebar";
import { NavbarTop } from "../NavbarTop/NavbarTop";


export const LayoutSistema = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh", backgroundColor: "#f9f9f9" }}>
      
      <Sidebar />

      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
    
        <NavbarTop/>
        <Box sx={{ flexGrow: 1, p: 3 }}>
          <Outlet />
        </Box>

      </Box>
    </Box>
  );
};