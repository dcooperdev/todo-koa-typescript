import DataBase from '../db/fake-db';
import { ITodo } from '../types/ITodo';

export default (): ITodo[] => {
    const todos: ITodo[] = DataBase.Instance().getTodos();
    return todos;
}