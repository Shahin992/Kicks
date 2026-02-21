import { Box, CircularProgress, Typography } from '@mui/material';

interface GlobalLoadingPageProps {
  message?: string;
}

const GlobalLoadingPage = ({ message = 'Loading...' }: GlobalLoadingPageProps) => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    height="100%"
    textAlign="center"
    py={6}
    gap={1.5}
  >
    <CircularProgress size={36} sx={{ color: '#4A69E2' }} />
    <Typography variant="body1" color="text.secondary">
      {message}
    </Typography>
  </Box>
);

export default GlobalLoadingPage;
