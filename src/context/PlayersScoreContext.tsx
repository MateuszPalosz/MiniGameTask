import type { FC } from 'react';
import { useCallback, useState, createContext, useContext } from 'react';
import type { IChildren } from 'api/types';

interface IPlayersScoreContext {
  left: number;
  right: number;
  leftWin: () => void;
  rightWin: () => void;
}

const PlayersScoreContext = createContext<IPlayersScoreContext>({
  left: 0,
  right: 0,
  leftWin: () => {},
  rightWin: () => {}
});

export const PlayersScoreContextProvider: FC<IChildren> = ({ children }) => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  const leftWin = useCallback(() => {
    setLeft((prev) => prev + 1);
  }, []);

  const rightWin = useCallback(() => {
    setRight((prev) => prev + 1);
  }, []);

  return (
    <PlayersScoreContext.Provider
      value={{
        left,
        right,
        leftWin,
        rightWin
      }}
    >
      {children}
    </PlayersScoreContext.Provider>
  );
};

const usePlayersScoreContext = (): IPlayersScoreContext => useContext(PlayersScoreContext);

export default usePlayersScoreContext;
