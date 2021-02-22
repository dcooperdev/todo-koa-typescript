import DataBase from '../db/fake-db';
import { ITodo } from './ITodo';

export interface IDatabase {
    getTodos(): ITodo[];
    setTodo(todo: ITodo): ITodo;
    getTodo(id: number): ITodo;
    updateTodo(todo: ITodo): ITodo;
    deleteTodo(id: number): ITodo[];
}