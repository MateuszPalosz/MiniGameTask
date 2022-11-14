import type { FC } from 'react';
import { Box, Grid } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import CasinoIcon from '@mui/icons-material/Casino';
import GameBoardCard from 'components/layout/GameBoardCard';
import type { TWinner } from 'utils/chooseWinner';
import dictionary from 'dictionary/dictionary';
import Error from 'components/error/Error';

const { dictGameLayout } = dictionary;

interface IPlayerCardDetails {
  title: string;
  value: string;
}

interface IProps {
  error: boolean;
  loading: boolean;
  play: () => void;
  leftPlayerCard: IPlayerCardDetails | null;
  rightPlayerCard: IPlayerCardDetails | null;
  label: string;
  winner: TWinner;
}

const GameBoard: FC<IProps> = ({ error, loading, play, leftPlayerCard, rightPlayerCard, label, winner }) => (
  <>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <GameBoardCard
            loading={loading}
            title={leftPlayerCard?.title}
            value={leftPlayerCard?.value}
            label={label}
            won={winner === 'draw' ? 'draw' : winner === 'left'}
          />
        </Grid>
        <Grid item xs={2}>
          <Box
            sx={{
              height: '100%',
              flexGrow: 1,
              flexDirection: 'column',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <LoadingButton
              loading={loading}
              loadingPosition="start"
              startIcon={<CasinoIcon />}
              variant="contained"
              onClick={play}
            >
              {dictGameLayout.roll}
            </LoadingButton>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <GameBoardCard
            loading={loading}
            title={rightPlayerCard?.title}
            value={rightPlayerCard?.value}
            label={label}
            won={winner === 'draw' ? 'draw' : winner === 'right'}
          />
        </Grid>
      </Grid>
    </Box>
    {error && <Error text={dictGameLayout.error} />}
  </>
);

export default GameBoard;
