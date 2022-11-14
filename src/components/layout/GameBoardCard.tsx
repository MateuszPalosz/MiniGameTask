import type { FC } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import Loader from 'components/loading/Loader';
import dictionary from 'dictionary/dictionary';

const { dictGameLayout } = dictionary;

interface IProps {
  title: string | undefined;
  value: string | undefined;
  label: string;
  won: boolean | 'draw';
  loading: boolean;
}

const GameBoardCard: FC<IProps> = ({ title, value, label, won, loading }) => {
  return (
    <Card
      role="gameboardcard"
      variant="outlined"
      sx={{
        minHeight: '10rem',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        height: '100%',
        alignItems: 'center',
        backgroundColor: won === 'draw' ? 'lightGrey' : won ? 'lightGreen' : 'lightCoral'
      }}
    >
      <CardContent>
        {loading ? (
          <Loader />
        ) : title && value ? (
          <>
            <Typography fontWeight={700}>{dictGameLayout.cardTitle}</Typography>
            <Typography gutterBottom>{title}</Typography>
            <Typography fontWeight={700} sx={{ textTransform: 'capitalize' }}>
              {label}
            </Typography>
            <Typography>{value}</Typography>
          </>
        ) : (
          <Typography>{dictGameLayout.noData}</Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default GameBoardCard;
