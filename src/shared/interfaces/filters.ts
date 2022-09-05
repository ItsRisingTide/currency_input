import { IDirection } from './directions';

export interface IFilter {
  from: IDirection;
  to: IDirection[];
}
