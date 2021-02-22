import deleteTodo from '../controllers/delete-todo-controller';
import { ITodo } from '../types/ITodo';

export default (ctx, next) => {
    const id: number = parseInt(ctx.request.params.id, 10);
    const todos: ITodo[] = deleteTodo(id);

    ctx.status = 200;
    ctx.state = {
        todos
    }
    return next();
}