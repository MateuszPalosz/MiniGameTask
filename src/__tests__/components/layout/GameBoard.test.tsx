import { render, screen } from '@testing-library/react';
import GameBoard from 'components/layout/GameBoard';
import dictionary from 'dictionary/dictionary';

const { dictGameLayout } = dictionary;

describe('GameBoard check with different props', () => {
  test('GameBoard button loading = true, loader visible, button disabled', () => {
    const mock = jest.fn();
    render(
      <GameBoard
        loading={true}
        error={false}
        play={mock}
        leftPlayerCard={null}
        rightPlayerCard={null}
        label="A"
        winner="draw"
      />
    );
    const buttonElem = screen.getByText(dictGameLayout.roll);
    expect(buttonElem).toHaveAttribute('disabled');
  });
  test('GameBoard error = true, error msg visible', () => {
    const mock = jest.fn();
    render(
      <GameBoard
        loading={false}
        error
        play={mock}
        leftPlayerCard={null}
        rightPlayerCard={null}
        label="A"
        winner="draw"
      />
    );
    const errorMsg = screen.getByText(dictGameLayout.error);
    expect(errorMsg).toBeInTheDocument();
  });
});
