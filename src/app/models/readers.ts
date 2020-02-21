import { IBook } from './book';

export interface IReader{
    name: string,
    books: IBook[]
}