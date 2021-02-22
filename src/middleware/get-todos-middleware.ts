import getTodos from '../controllers/get-todos-controller';
import { ITodo } from '../types/ITodo';

export default (ctx, next) => {
    const todos: ITodo[] = getTodos();
    ctx.status = 200;
    ctx.state = {
        todos
    }
    return next();
}