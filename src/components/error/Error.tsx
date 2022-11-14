import type { FC } from 'react';
import { Box } from '@mui/material';
import dictionary from 'dictionary/dictionary';

const { dictError } = dictionary;

interface IProps {
  text?: string;
}

const Error: FC<IProps> = ({ text }) => <Box textAlign="center">{text ?? dictError.errorTxt}</Box>;

export default Error;
