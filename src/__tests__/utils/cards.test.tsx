import { drawCard } from 'utils/cards';

describe('cards utils', () => {
  test('draw cards if count = 1 (only single page), pageIndex should be 1, element Index between 0 - 1', () => {
    const result = drawCard(1);
    expect(result.pageIndex).toBe(1);
    expect(result.elementIndex).toBeGreaterThanOrEqual(0);
    expect(result.elementIndex).toBeLessThanOrEqual(1);
  });
  test('draw cards if count = 1 (only single page), pageIndex should be 1, element Index between 0 - 8', () => {
    const result = drawCard(9);
    expect(result.pageIndex).toBe(1);
    expect(result.elementIndex).toBeGreaterThanOrEqual(0);
    expect(result.elementIndex).toBeLessThanOrEqual(8);
  });
  test('draw cards if count = 32 (4 pages total), pageIndex should between 1 - 4, element Index between 0 - 31', () => {
    const result = drawCard(32);
    expect(result.pageIndex).toBeGreaterThanOrEqual(1);
    expect(result.pageIndex).toBeLessThanOrEqual(4);
    expect(result.elementIndex).toBeGreaterThanOrEqual(0);
    expect(result.elementIndex).toBeLessThanOrEqual(31);
  });
});
