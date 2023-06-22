import {Book} from './Book';
import {Sort} from "./Sort";
import {Pageable} from "./Pageable";

export interface Data {
  content: Book[];
  pageable: Pageable;
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  sort: Sort;
  first: boolean;
  numberOfElements: number;
  empty: boolean;

}

