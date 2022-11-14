import type { FC } from 'react';
import { Box, CircularProgress } from '@mui/material';

const Loader: FC = () => (
  <Box
    sx={{
      minHeight: '5rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <CircularProgress />
  </Box>
);

export default Loader;
