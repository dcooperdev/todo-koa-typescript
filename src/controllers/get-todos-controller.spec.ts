import createTodoController from './get-todos-controller';
import { ITodo } from '../types/ITodo';

test("sample test", () => {

  const todos: ITodo[] = [
    {
      id: 0,
      complete: false,
      description: 'Make Skynet great again'
    },
    {
      id: 1,
      complete: false,
      description: 'Destroy humankind'
    }
  ];

  const context = createTodoController();
  expect(context).toMatchObject(todos);
});