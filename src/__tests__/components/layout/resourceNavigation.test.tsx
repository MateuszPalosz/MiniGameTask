import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Game from 'components/layout/Game';
import dictionary from 'dictionary/dictionary';

const { dictGameLayout } = dictionary;

test('GameResourcesNav check active links during navigation between routes', async () => {
  render(<Game />, { wrapper: BrowserRouter });
  const user = userEvent.setup();

  expect(screen.getByText(dictGameLayout.resourceNav.people)).not.toHaveClass('active');
  expect(screen.getByText(dictGameLayout.resourceNav.starships)).not.toHaveClass('active');

  await user.click(screen.getByText(dictGameLayout.resourceNav.people));
  expect(screen.getByText(dictGameLayout.resourceNav.people)).toHaveClass('active');
  expect(screen.getByText(dictGameLayout.resourceNav.starships)).not.toHaveClass('active');

  await user.click(screen.getByText(dictGameLayout.resourceNav.starships));
  expect(screen.getByText(dictGameLayout.resourceNav.starships)).toHaveClass('active');
  expect(screen.getByText(dictGameLayout.resourceNav.people)).not.toHaveClass('active');
});
