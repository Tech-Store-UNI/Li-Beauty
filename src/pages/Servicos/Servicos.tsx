import { Box } from '@mui/material'
import { Cilios } from '../../components/Pages/Servicos/Cilios/Cilios'

export const Servicos = () => {
  return (
    <Box sx={{ marginTop: { xs: '-50px', md: '-150px' }, position: 'relative', zIndex: 1000 }}>
        <Cilios/>
    </Box>
  )
}
