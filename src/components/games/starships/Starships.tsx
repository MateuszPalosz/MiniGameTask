import type { FC } from 'react';
import useQueryStarships, { getStarships } from 'api/starships';
import ApiLoader from 'components/loading/ApiLoader';
import GameLogic from 'components/games/GameLogic';

const Starships: FC = () => {
  const { status, data } = useQueryStarships(1);
  return (
    <ApiLoader status={status}>
      {data && <GameLogic data={data} queryKey="starships" queryFn={getStarships} compareKey="crew" titleKey="name" />}
    </ApiLoader>
  );
};

export default Starships;
