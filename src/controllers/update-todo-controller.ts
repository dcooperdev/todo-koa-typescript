import DataBase from '../db/fake-db';
import { ITodo } from '../types/ITodo';

export default (todo: ITodo): ITodo => {
    const newTodo: ITodo = DataBase.Instance().updateTodo(todo);
    return newTodo;
}