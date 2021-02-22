import updateTodo from '../controllers/update-todo-controller';
import { ITodo } from '../types/ITodo';

export default (ctx, next) => {
    const todo: ITodo = ctx.request.body.todo;
    const updatedTodo: ITodo = updateTodo(todo);

    ctx.status = 200;
    ctx.state = {
        updatedTodo
    }
    return next();
}