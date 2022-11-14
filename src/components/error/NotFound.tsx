import type { FC } from 'react';
import { Box } from '@mui/material';
import dictionary from 'dictionary/dictionary';

const { dictError } = dictionary;

const NotFound: FC = () => <Box textAlign="center">{dictError.notFoundTxt}</Box>;

export default NotFound;
