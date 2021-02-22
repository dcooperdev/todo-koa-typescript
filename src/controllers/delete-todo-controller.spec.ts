import deleteTodoController from './delete-todo-controller';
import { ITodo } from '../types/ITodo';

test("sample test", () => {

  const todo: ITodo[] = [{
    id: 1,
    complete: false,
    description: 'Destroy humankind'
  }];

  const context = deleteTodoController(0);
  expect(context).toMatchObject(todo);
});