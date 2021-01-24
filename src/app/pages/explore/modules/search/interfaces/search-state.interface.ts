import {IPlace} from '../../../../../@data/interfaces';
import {IFilter} from './filter.interface';

export interface ISearchState {
  places: IPlace[];
  filters: IFilter;
}
