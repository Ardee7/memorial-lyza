import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import { Box, Container, Divider, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 3, mt: 4, backgroundColor: 'transparent' }}>
    <Container maxWidth="lg">
      <Divider sx={{ mb: 2 }} />
      <Typography variant="body2" align="center" color="textSecondary">
        "Those we love never truly leave us. There are things that death cannot touch."
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" sx={{ mt: 1, fontFamily: 'Lato, sans-serif' }}>
        © {new Date().getFullYear()} Lyza Kate Villanueva Lachica - In Loving Memory
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 1 }}>
        <Facebook fontSize="small" sx={{ cursor: 'pointer' }} />
        <Instagram fontSize="small" sx={{ cursor: 'pointer' }} />
        <Twitter fontSize="small" sx={{ cursor: 'pointer' }} />
      </Box>
    </Container>
  </Box>
  )
}

export default Footer