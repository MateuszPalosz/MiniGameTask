import type { ReactNode } from 'react';

export default interface ISwapiPage<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<T>;
}

export interface IChildren {
  children: ReactNode;
}
