import { render, screen } from '@testing-library/react';
import ApiLoader from 'components/loading/ApiLoader';
import dictionary from 'dictionary/dictionary';

const { dictError } = dictionary;

describe('ApiLoader status testing', () => {
  test('ApiLoader status = error, error text visible', () => {
    render(<ApiLoader status="error">test</ApiLoader>);
    const errorText = screen.getByText(dictError.apiErrorTxt);
    expect(errorText).toBeInTheDocument();
  });
  test('ApiLoader status = loading, loader visible', () => {
    render(<ApiLoader status="loading">test</ApiLoader>);
    const loader = screen.getByRole('progressbar');
    expect(loader).toBeInTheDocument();
  });
  test('ApiLoader status = success, child visible', () => {
    render(<ApiLoader status="success">test</ApiLoader>);
    const child = screen.getByText('test');
    expect(child).toBeInTheDocument();
  });
});
