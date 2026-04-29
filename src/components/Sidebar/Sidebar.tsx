// Sidebar.tsx
import { Box } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EventIcon from "@mui/icons-material/Event";
import GroupIcon from "@mui/icons-material/Group";
import InventoryIcon from "@mui/icons-material/Inventory";
import logo from "../../img/logo.png";
import { NavButton } from "./NavButton";


export const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Box sx={{ width: 250, height: "100vh", backgroundColor: "#ffffff", borderRight: "1px solid #eee", display: "flex", flexDirection: "column", alignItems: "center", pt: 2, }}>
            <Box
                component="img"
                src={logo}
                alt="Logo"
                sx={{ width: 200, mb: 7, mr: 2 }}
            />
            <Box sx={{ width: "100%", px: 3 }}>
                <NavButton
                    icon={<DashboardIcon />}
                    label="Dashboard"
                    active={location.pathname === "/dashboard"}
                    onClick={() => navigate("/dashboard")}
                />

                <NavButton
                    icon={<EventIcon />}
                    label="Agendamento"
                    active={location.pathname === "/dashboard/agendamento"}
                    onClick={() => navigate("/dashboard/agendamento")}
                />

                <NavButton
                    icon={<GroupIcon />}
                    label="Clientes"
                    active={location.pathname === "/dashboard/clientes"}
                    onClick={() => navigate("/dashboard/clientes")}
                />

                <NavButton
                    icon={<InventoryIcon />}
                    label="Inventário"
                    active={location.pathname === "/dashboard/inventario"}
                    onClick={() => navigate("/dashboard/inventario")}
                />
            </Box>
        </Box>
    );
};