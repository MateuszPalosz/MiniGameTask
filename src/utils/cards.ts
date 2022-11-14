export const drawCard = (count: number): { pageIndex: number; elementIndex: number } => {
  const rolledIndex = Math.floor(Math.random() * (count - 1));
  const pageIndex = Math.floor(rolledIndex / 10) + 1;
  const elementIndex = rolledIndex % 10;
  return { pageIndex, elementIndex };
};

export const drawCards = (count: number): { left: number; right: number; leftIndex: number; rightIndex: number } => {
  const { pageIndex: left, elementIndex: leftIndex } = drawCard(count);
  const { pageIndex: right, elementIndex: rightIndex } = drawCard(count);
  return { left, right, leftIndex, rightIndex };
};
