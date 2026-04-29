import { Box, Typography, TextField, Avatar, InputAdornment, IconButton, } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';

export const NavbarTop = () => {
    return (
        <Box sx={{ height: 80, backgroundColor: "#ffffff", borderBottom: "1px solid #eee", display: "flex", alignItems: "center", justifyContent: "space-between", px: 3, }}>
            <Box>
                <Typography sx={{ fontWeight: 900, fontSize: 17 }}>
                    Olá, Mãe do Yan
                </Typography>
                <Typography sx={{ fontSize: 12, color: "#747474" }}>
                    Seja bem-vinda ao sistema Beauty
                </Typography>
            </Box>

            <TextField
                placeholder="Pesquisar..."
                variant="outlined"
                size="small"
                sx={{
                    width: 320,
                    "& .MuiOutlinedInput-root": {
                        borderRadius: "10px",
                        backgroundColor: "#f7f7f7",
                        height: 40,
                        paddingRight: "18px",

                        "& fieldset": {
                            border: "none",
                        },
                    },

                    "& input": {
                        fontSize: 13,
                        color: "#797979",
                    },
                }}
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon sx={{ fontSize: 18, color: "#888" }} />
                            </InputAdornment>
                        ),

                        endAdornment: (
                            <InputAdornment position="end">
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "4px",
                                        color: "#777",
                                    }}
                                >
                                    <Typography sx={{ fontSize: 12, fontWeight: 900 }}>⌘</Typography>
                                    <Typography sx={{ fontSize: 14, fontWeight: 600 }}>K</Typography>
                                </Box>
                            </InputAdornment>
                        ),
                    },
                }}
            />

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box>
                    <IconButton>
                        <ForwardToInboxIcon sx={{ fontSize: 20, color: "#000000" }} />
                    </IconButton>

                    <IconButton>
                        <NotificationsNoneIcon sx={{ fontSize: 20, color: "#000000" }} />
                    </IconButton>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Avatar sx={{ width: 32, height: 32 }} />

                    <Box>
                        <Typography sx={{ fontSize: 13, fontWeight: 600 }}>
                            Mãe do Yan
                        </Typography>
                        <Typography sx={{ fontSize: 11, color: "#8c8c8c" }}>
                            Owner
                        </Typography>
                    </Box>
                </Box>

            </Box>
        </Box>
    );
};