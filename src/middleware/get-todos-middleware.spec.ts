import getTodosMiddleware from './get-todos-middleware';
import getTodos from '../controllers/get-todos-controller';
import { ITodo } from '../types/ITodo';

// Create a new variable and type it as jest.Mock passing the type
jest.mock('../controllers/get-todos-controller');
const mockedDeleteTodo = getTodos as jest.Mock<ITodo[]>;

test("sample test", () => {

  const todos: ITodo[] = [{
    id: 0,
    complete: false,
    description: 'Test'
  },
  {
    id: 1,
    complete: false,
    description: 'Test'
  }];
  const ctx = {
    request: { params: { id: 1 }},
    status: 0,
    state: {}
  };
  mockedDeleteTodo.mockImplementation(() => {
    return todos
  });
  const context = getTodosMiddleware(ctx, ()=> {});

  expect(ctx.status).toBe(200);
  expect(ctx.state).toMatchObject({todos});
});