import DataBase from '../db/fake-db';
import { ITodo } from '../types/ITodo';

export default (id: number): ITodo => {
    const todo: ITodo = DataBase.Instance().getTodo(id);
    return todo;
}