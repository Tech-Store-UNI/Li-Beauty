import type { Theme } from "@mui/material/styles";

export const textGradient = {
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textFillColor: "transparent",
}

export const scrollResponse = (theme: Theme) => ({
    overflowX: "auto",
    position: "relative",

    "&::-webkit-scrollbar": {
        height: "6px",
    },
    "&::-webkit-scrollbar-thumb": {
        backgroundColor: theme.palette.primary.main,
        borderRadius: "10px",
    },
    "&::-webkit-scrollbar-track": {
        backgroundColor: "#e1e1e1",
    },
});


export const containerTablecomunStyles = {
    bgcolor: "#fff",
    width: "100%",
    p: 3,
    minHeight: "81.5vh",
    boxShadow: { md: "0 0 20px rgba(48, 48, 48, 0.06)" },
    borderRadius: 2,
}