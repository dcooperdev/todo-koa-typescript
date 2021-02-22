import DataBase from './fake-db';
import { ITodo } from '../types/ITodo';

const todos: ITodo[] = [{
  id: 0,
  complete: false,
  description: 'Make Skynet great again'
},
{
  id: 1,
  complete: false,
  description: 'Destroy humankind'
}];

test("FakeDatabase getTodos Test", () => {
  const getTodos: ITodo[] = DataBase.Instance().getTodos();

  expect(getTodos).toMatchObject(todos);
});

test("FakeDatabase newTodo Test", () => {
  const todo = { ...todos[0], id: 2 };
  const newTodo: ITodo = DataBase.Instance().setTodo(todo);

  expect(newTodo).toMatchObject(todo);
});

test("FakeDatabase getTodo Test", () => {
  const newTodo: ITodo = DataBase.Instance().getTodo(0);

  expect(newTodo).toMatchObject(todos[0]);
});

test("FakeDatabase updateTodo Test", () => {
  const todo = {...todos[0], complete: true }
  const updateTodo: ITodo = DataBase.Instance().updateTodo(todo);

  expect(updateTodo.complete).toBeTruthy();
});

test("FakeDatabase deleteTodo Test", () => {
  const deleteTodo: ITodo[] = DataBase.Instance().deleteTodo(0);

  expect(deleteTodo).toMatchObject([
    {
      id: 1,
      complete: false,
      description: 'Destroy humankind'
    },
    {
      id: 2,
      complete: false,
      description: 'Make Skynet great again'
    }
  ]);
});