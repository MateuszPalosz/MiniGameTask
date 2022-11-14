import type { ReactNode, GetDerivedStateFromError } from 'react';
import { Component } from 'react';
import { Box } from '@mui/material';
import type { IChildren } from 'api/types';
import dictionary from 'dictionary/dictionary';

const { dictError } = dictionary;

interface IDerivedStateFromError {
  hasError: boolean;
}

class ErrorBoundary extends Component<IChildren, IDerivedStateFromError> {
  constructor(props: IChildren) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ReturnType<GetDerivedStateFromError<unknown, IDerivedStateFromError>> {
    return { hasError: true };
  }

  // public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
  //   console.error('Uncaught error:', error, errorInfo);
  // }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <Box textAlign="center">
          <p>{dictError.errorBoundaryFallbackTxt}</p>
        </Box>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
