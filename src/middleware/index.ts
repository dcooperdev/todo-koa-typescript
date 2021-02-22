import getTodoMiddleware from './get-todo-middleware';
import getTodosMiddleware from './get-todos-middleware';
import createTodoMiddleware from './create-todo-middleware';
import updateTodoMiddleware from './update-todo-middleware';
import deleteTodoMiddleware from './delete-todo-middleware';
import responseMiddleware from './response-middleware';
  
export default {
  GETTODO: [
    getTodoMiddleware,
    responseMiddleware
  ],
  GETTODOS: [
    getTodosMiddleware,
    responseMiddleware
  ],
  CREATETODO: [
    createTodoMiddleware,
    responseMiddleware
  ],
  UPDATETODO: [
    updateTodoMiddleware,
    responseMiddleware
  ],
  DELETETODO: [
    deleteTodoMiddleware,
    responseMiddleware
  ]
}
