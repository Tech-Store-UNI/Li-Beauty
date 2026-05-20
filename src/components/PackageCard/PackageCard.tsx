import { Box, Typography } from '@mui/material';

export const PackageCard = ({ item }: { item: any }) => {
    const isPacote = item.detalhes && item.detalhes.length > 0;

    return (
        <Box sx={{ position: "relative", width: "100%", overflow: "hidden", borderRadius: 2 }}>
            <Box
                component="img"
                src={item.img}
                sx={{
                    width: "100%",
                    display: "block",
                    objectFit: "cover",
                }}
            />

            {isPacote ? (
                <Box sx={{ position: "absolute", bottom: 35, left: 30, right: 30, color: "#fff" }}>
                    <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
                        {item.nome}
                    </Typography>

                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                        <Box>
                            {item.detalhes.map((d: string, i: number) => (
                                <Typography key={i} sx={{ ml: 0.5, fontSize: 20 }}>
                                    {d}
                                </Typography>
                            ))}
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "end", width: 300 }}>
                            <Box sx={{ position: "absolute", right: 50,bottom: 1, backgroundColor: "background.paper", p: 2, height: 20, borderRadius: 2, width: 100, textAlign: "center" }}>
                                <Typography sx={{ textDecoration: "line-through", opacity: 0.8, color: "primary.main", fontWeight: 900 }}>
                                    {item.preco}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            ) : (
                <Box sx={{ position: "absolute", bottom: 60, left: 30, right: 60, color: "#fff" }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", gap: 5, alignItems: "center" }}>
                        <Typography variant="h4" sx={{ fontWeight: "bold", textShadow: "3px 5px 16px #00000063", flex: 1 }}>
                            {item.nome}
                        </Typography>
                        <Box sx={{ backgroundColor: "background.paper", p: 2, height: 25, borderRadius: 2, width: 100, textAlign: "center" }}>
                            <Typography sx={{ color: "primary.main", fontWeight: 900, fontSize: 18 }}>
                                {item.preco}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            )}
        </Box>
    );
};