import createTodo from '../controllers/create-todo-controller';
import { ITodo } from '../types/ITodo';

export default (ctx, next) => {
    const todo: ITodo = ctx.request.body.todo;
    const newTodo: ITodo = createTodo(todo);

    ctx.status = 201;
    ctx.state = {
        newTodo
    }
    return next();
}