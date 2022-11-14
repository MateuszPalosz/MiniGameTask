import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { drawCards } from 'utils/cards';
import usePlayersScoreContext from 'context/PlayersScoreContext';
import type ISwapiPage from 'api/types';
import { chooseWinner, TWinner } from 'utils/chooseWinner';
import GameBoard from 'components/layout/GameBoard';
import { prepareString, prepareValue } from 'utils/prepareValues';

interface IProps<T extends Record<K, string | string[]>, K extends keyof T> {
  data: ISwapiPage<T>;
  queryKey: string;
  queryFn: (page: number, signal: AbortSignal | undefined) => Promise<ISwapiPage<T>>;
  compareKey: K;
  titleKey: K;
}

interface IPlayersDraws {
  left: number;
  right: number;
  leftIndex: number;
  rightIndex: number;
}

interface IPlayersCards<T> {
  left: T | null;
  right: T | null;
  winner: TWinner;
}

const GameLogic = <T extends Record<K, string | string[]>, K extends keyof T>({
  data,
  queryKey,
  queryFn,
  compareKey,
  titleKey
}: IProps<T, K>) => {
  const [drawDetails, setDrawDetails] = useState<IPlayersDraws>({
    left: 0,
    right: 0,
    leftIndex: 0,
    rightIndex: 0
  });
  const [playersCards, setPlayersCards] = useState<IPlayersCards<T>>({
    left: null,
    right: null,
    winner: 'draw'
  });
  const { leftWin, rightWin } = usePlayersScoreContext();
  const {
    isLoading: leftIsLoading,
    data: leftPlayerData,
    isError: leftIsError
  } = useQuery([queryKey, drawDetails.left], ({ signal }) => queryFn(drawDetails.left, signal), {
    enabled: !!drawDetails.left,
    staleTime: Infinity
  });
  const {
    isLoading: rightIsLoading,
    data: rightPlayerData,
    isError: rightIsError
  } = useQuery([queryKey, drawDetails.right], ({ signal }) => queryFn(drawDetails.right, signal), {
    enabled: !!drawDetails.right,
    staleTime: Infinity
  });

  const loading = (leftIsLoading || rightIsLoading) && !!drawDetails.left && !!drawDetails.right;
  const error = (leftIsError || rightIsError) && !!drawDetails.left && !!drawDetails.right;

  const play = (maxNumber: number): void => {
    const { left, right, leftIndex, rightIndex } = drawCards(maxNumber);
    setDrawDetails({ left, right, leftIndex, rightIndex });
  };

  useEffect(() => {
    if (drawDetails.left && drawDetails.right && leftPlayerData && rightPlayerData) {
      const winner = chooseWinner(
        prepareValue(leftPlayerData.results[drawDetails.leftIndex][compareKey]),
        prepareValue(rightPlayerData.results[drawDetails.rightIndex][compareKey]),
        leftWin,
        rightWin
      );
      setPlayersCards({
        left: leftPlayerData.results[drawDetails.leftIndex],
        right: rightPlayerData.results[drawDetails.rightIndex],
        winner
      });
    }
  }, [
    compareKey,
    drawDetails.left,
    drawDetails.leftIndex,
    drawDetails.right,
    drawDetails.rightIndex,
    leftPlayerData,
    leftWin,
    queryKey,
    rightPlayerData,
    rightWin
  ]);

  return (
    <GameBoard
      error={error}
      loading={loading}
      play={() => play(data.count)}
      winner={playersCards.winner}
      leftPlayerCard={
        playersCards.left && {
          title: playersCards.left[titleKey].toString(),
          value: prepareString(playersCards.left[compareKey])
        }
      }
      rightPlayerCard={
        playersCards.right && {
          title: playersCards.right[titleKey].toString(),
          value: prepareString(playersCards.right[compareKey])
        }
      }
      label={String(compareKey)}
    />
  );
};

export default GameLogic;
