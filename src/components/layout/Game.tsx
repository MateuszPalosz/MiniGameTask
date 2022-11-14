import type { FC } from 'react';
import { Box, Container, Divider, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';
import usePlayersScoreContext from 'context/PlayersScoreContext';
import GameResourcesNav from 'components/layout/GameResourcesNav';
import dictionary from 'dictionary/dictionary';

const { dictGameLayout } = dictionary;

const Game: FC = () => {
  const { left, right } = usePlayersScoreContext();
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          mb: 4,
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <Typography sx={{ my: 4 }} variant="h3" gutterBottom>
          {dictGameLayout.choose}
        </Typography>
        <GameResourcesNav />
        <Typography variant="h3" gutterBottom>
          {left} : {right}
        </Typography>
      </Box>
      <Divider sx={{ mb: 4 }} />
      <Outlet />
    </Container>
  );
};

export default Game;
