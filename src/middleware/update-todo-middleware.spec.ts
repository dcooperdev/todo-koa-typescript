import updateTodoMiddleware from './update-todo-middleware';
import updateTodo from '../controllers/update-todo-controller';
import { ITodo } from '../types/ITodo';

// Create a new variable and type it as jest.Mock passing the type
jest.mock('../controllers/update-todo-controller');
const mockedGetTodo = updateTodo as jest.Mock<ITodo>;

test("sample test", () => {

  const todo: ITodo = {
    id: 0,
    complete: false,
    description: 'Test'
  };
  const ctx = {
    request: { body: { todo }},
    status: 0,
    state: {}
  };
  mockedGetTodo.mockImplementation(() => {
    return todo
  });
  const context = updateTodoMiddleware(ctx, ()=> {});

  expect(ctx.status).toBe(200);
  expect(ctx.state).toMatchObject({updatedTodo: todo});
});