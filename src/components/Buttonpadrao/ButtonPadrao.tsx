import { Button } from '@mui/material'
import { getGradient } from '../../util/gradients'
import { useNavigate } from 'react-router-dom';

export const Buttonpadrao = () => {

  const navigate = useNavigate();

    const handleAgendamentoClick = () => {
        const tokenJWT = localStorage.getItem("token");

        if (tokenJWT) {
            navigate("/dashboard");
        } else {
            navigate("/login");
        }
    }

  return (
    <Button
      variant="contained"
      onClick={handleAgendamentoClick}
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
