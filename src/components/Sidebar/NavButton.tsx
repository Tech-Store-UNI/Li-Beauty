import { Button, Box, Typography } from "@mui/material";

type NavButtonProps = {
    icon?: React.ReactNode;
    label: string;
    active?: boolean;
    onClick?: () => void;
};

export const NavButton: React.FC<NavButtonProps> = ({
    icon,
    label,
    active = false,
    onClick,
}) => {
    return (
        <Button
            onClick={onClick}
            fullWidth
            sx={{
                justifyContent: "flex-start",
                textTransform: "none",
                borderRadius: "6px",
                px: 2,
                py: 2,
                fontWeight: 600,
                fontSize: "0.9rem",
                color: active ? "#fff" : "#000000",
                backgroundColor: active ? "#e57373" : "transparent",
                transition: "all 0.2s ease",
                mb: 1,
                "&:hover": {
                    backgroundColor: active ? "#e57373" : "#fff6f6",
                },
                width: 200
            }}
        >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>

                <Box sx={{ display: "flex",alignItems: "center",color: active ? "#fff" : "#e57373",}} >
                    {icon}
                </Box>

                <Typography sx={{ fontSize: 13, fontWeight: active ? 900 : 500 }}>
                    {label}
                </Typography>
            </Box>
        </Button>
    );
};