import getTodo from '../controllers/get-todo-controller';
import { ITodo } from '../types/ITodo';

export default (ctx, next) => {
    const id: number = parseInt(ctx.request.params.id, 10);
    const todo: ITodo = getTodo(id);

    ctx.status = 200;
    ctx.state = {
        todo
    }
    return next();
}