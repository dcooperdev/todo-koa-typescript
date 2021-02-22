import DataBase from '../db/fake-db';
import { ITodo } from '../types/ITodo';

export default (id: number): ITodo[] => {
    const todos = DataBase.Instance().deleteTodo(id);
    return todos;
}