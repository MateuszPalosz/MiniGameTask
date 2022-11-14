import { render, screen } from '@testing-library/react';
import GameBoardCard from 'components/layout/GameBoardCard';
import dictionary from 'dictionary/dictionary';

const { dictGameLayout } = dictionary;

describe('GameBoardCard check with different props', () => {
  test('GameBoardCard loading = true, loader visible', () => {
    render(<GameBoardCard title="A" value="1" loading won="draw" label="A" />);
    const loader = screen.getByRole('progressbar');
    expect(loader).toBeInTheDocument();
  });
  test('GameBoardCard empty values, msg visible', () => {
    render(<GameBoardCard title={undefined} value={undefined} loading={false} won="draw" label="A" />);
    const card = screen.getByRole('gameboardcard');
    expect(card).toHaveTextContent(dictGameLayout.noData);
  });
  test('GameBoardCard won = true, light green background', () => {
    render(<GameBoardCard title="A" value="1" loading={false} won label="A" />);
    const card = screen.getByRole('gameboardcard');
    expect(card).toHaveStyle('background-color:lightGreen');
  });
  test('GameBoardCard won = false, light red background', () => {
    render(<GameBoardCard title="A" value="1" loading={false} won={false} label="A" />);
    const card = screen.getByRole('gameboardcard');
    expect(card).toHaveStyle('background-color:lightCoral');
  });
  test('GameBoardCard won = draw, grey card background', () => {
    render(<GameBoardCard title="A" value="1" loading={false} won="draw" label="A" />);
    const card = screen.getByRole('gameboardcard');
    expect(card).toHaveStyle('background-color:lightGrey');
  });
});
