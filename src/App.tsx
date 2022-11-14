import type { FC } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ErrorBoundary from 'components/error/ErrorBoundary';
import Game from 'components/layout/Game';
import People from 'components/games/people/People';
import Starships from 'components/games/starships/Starships';
import NotFound from 'components/error/NotFound';
import { PlayersScoreContextProvider } from 'context/PlayersScoreContext';
import { routeLinks } from 'dictionary/routeLinks';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false
    }
  }
});

const App: FC = () => {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <PlayersScoreContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path={routeLinks.home} element={<Game />}>
                <Route path={routeLinks.people} element={<People />} />
                <Route path={routeLinks.starships} element={<Starships />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </PlayersScoreContextProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
