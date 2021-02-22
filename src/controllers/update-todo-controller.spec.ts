import deleteTodoController from './update-todo-controller';
import { ITodo } from '../types/ITodo';

test("sample test", () => {

  const todo: ITodo = {
    id: 1,
    complete: true,
    description: 'Destroy humankind'
  };

  const context = deleteTodoController(todo);
  expect(context).toMatchObject(todo);
});