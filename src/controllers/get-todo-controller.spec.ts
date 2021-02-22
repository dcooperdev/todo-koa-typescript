import createTodoController from './get-todo-controller';
import { ITodo } from '../types/ITodo';

test("sample test", () => {

  const todo: ITodo = {
    id: 1,
    complete: false,
    description: 'Destroy humankind'
  };

  const context = createTodoController(1);
  expect(context).toMatchObject(todo);
});