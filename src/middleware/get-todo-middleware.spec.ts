import getTodoMiddleware from './get-todo-middleware';
import getTodo from '../controllers/get-todo-controller';
import { ITodo } from '../types/ITodo';

// Create a new variable and type it as jest.Mock passing the type
jest.mock('../controllers/get-todo-controller');
const mockedGetTodo = getTodo as jest.Mock<ITodo>;

test("sample test", () => {

  const todo: ITodo = {
    id: 0,
    complete: false,
    description: 'Test'
  };
  const ctx = {
    request: { params: { id: 1 }},
    status: 0,
    state: {}
  };
  mockedGetTodo.mockImplementation(() => {
    return todo
  });
  const context = getTodoMiddleware(ctx, ()=> {});

  expect(ctx.status).toBe(200);
  expect(ctx.state).toMatchObject({todo});
});