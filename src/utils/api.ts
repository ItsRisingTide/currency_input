import { directions } from '../__mocks__/directions';
import { filters } from '../__mocks__/filters';
import type { IDirection } from '../shared/interfaces/directions';
import type { IFilter } from '../shared/interfaces/filters';

export const getDirections = (): Promise<IDirection[]> => {
  return new Promise((res, rej) => {
    setTimeout(() => res(directions), 1000);
  });
};

export const getFilters = (): Promise<IFilter[]> => {
  return new Promise((res, rej) => {
    setTimeout(() => res(filters), 1000);
  });
};
