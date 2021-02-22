import createTodoMiddleware from './create-todo-middleware';
import createTodo from '../controllers/create-todo-controller';
import { ITodo } from '../types/ITodo';

// Create a new variable and type it as jest.Mock passing the type
jest.mock('../controllers/create-todo-controller');
const mockedCreateTodo = createTodo as jest.Mock<ITodo>;

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
  mockedCreateTodo.mockImplementation(() => {
    return todo
  });
  const context = createTodoMiddleware(ctx, ()=> {});

  expect(ctx.status).toBe(201);
  expect(ctx.state).toMatchObject({
    newTodo: todo
  });
});