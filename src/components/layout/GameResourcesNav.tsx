import type { FC } from 'react';
import { Button, ButtonGroup } from '@mui/material';
import { NavLink } from 'react-router-dom';
import dictionary from 'dictionary/dictionary';
import { routeLinks } from 'dictionary/routeLinks';

const { dictGameLayout } = dictionary;

const linkActiveStyle = {
  '&.active': {
    backgroundColor: 'primary.main',
    color: 'white'
  }
};

const GameResourcesNav: FC = () => {
  return (
    <ButtonGroup sx={{ mb: 2 }}>
      <Button component={NavLink} to={routeLinks.people} sx={linkActiveStyle}>
        {dictGameLayout.resourceNav.people}
      </Button>
      <Button component={NavLink} to={routeLinks.starships} sx={linkActiveStyle}>
        {dictGameLayout.resourceNav.starships}
      </Button>
    </ButtonGroup>
  );
};

export default GameResourcesNav;
