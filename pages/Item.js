import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function SimpleContainer() {
  return (
    <>
      <Container maxWidth="xl">
        <Box  sx={{ bgcolor: '#292929', height: '100vh' }}/>
        <Box  sx={{ bgcolor: '#000', height: '100vh' }}/>
      </Container>
   </>
  );
}
