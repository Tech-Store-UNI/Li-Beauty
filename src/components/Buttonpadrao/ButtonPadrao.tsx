import { Button } from '@mui/material'
import { getGradient } from '../../util/gradients'

export const Buttonpadrao = () => {
  return (
    <Button
      variant="contained"
      sx={{
        background: getGradient("main"),
        color: "white",
        px: 12,
        py: 1.2,
        borderRadius: "15px",
        fontWeight: "bold",
        textTransform: "none",
        fontSize: "1.1rem",
        "&:hover": {
          opacity: 0.9,
        },
      }}
    >
      Agendamento online
    </Button>
  )
}
