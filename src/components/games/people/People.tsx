import type { FC } from 'react';
import useQueryPeople, { getPeople } from 'api/people';
import GameLogic from 'components/games/GameLogic';
import ApiLoader from 'components/loading/ApiLoader';

const People: FC = () => {
  const { status, data } = useQueryPeople(1);

  return (
    <ApiLoader status={status}>
      {data && <GameLogic data={data} queryKey="people" queryFn={getPeople} compareKey="mass" titleKey="name" />}
    </ApiLoader>
  );
};

export default People;
