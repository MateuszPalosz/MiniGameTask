import type { FC } from 'react';
import type { QueryStatus } from '@tanstack/react-query';
import Loader from 'components/loading/Loader';
import Error from 'components/error/Error';
import type { IChildren } from 'api/types';
import dictionary from 'dictionary/dictionary';

const { dictError } = dictionary;

interface IProps extends IChildren {
  status: QueryStatus;
}

const ApiLoader: FC<IProps> = ({ status, children }) => {
  if (status === 'loading') return <Loader />;
  if (status === 'error') return <Error text={dictError.apiErrorTxt} />;
  return <>{children}</>;
};

export default ApiLoader;
