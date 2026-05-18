import { Box } from '@mui/material';

export const PackageCard = ({ item }: { item: any }) => {
    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                height: "350px",
                overflow: "hidden",
                borderRadius: 2
            }}
        >
            <Box
                component="img"
                src={item.img}
                sx={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                    objectFit: "cover",
                    objectPosition: "center top", // 
                }}
            />
        </Box>
    );
};