import { compose, fromPairs, map, split, tail } from 'ramda';

export type QsObj = any;

export const parseQs = (qs: string): QsObj => {
  const f0 = tail;
  const f1 = split('&');
  const f2 = map(split('='));
  const f3 = fromPairs;

  // @ts-ignore
  return compose(f3, f2, f1, f0)(qs);
};
