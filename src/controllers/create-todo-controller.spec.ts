import createTodoController from './create-todo-controller';
import { ITodo } from '../types/ITodo';

test("sample test", () => {

  const todo: ITodo = {
    id: 2,
    complete: false,
    description: 'Test'
  };

  const context = createTodoController(todo);
  expect(context).toMatchObject(todo);
});