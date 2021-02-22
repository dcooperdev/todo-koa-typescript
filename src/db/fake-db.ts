import { IDatabase } from "../types/IDatabase";
import { ITodo } from "../types/ITodo";

export default class DataBase implements IDatabase {
    private index: number = 1;
    private static instance: DataBase;

    private todos: ITodo[] = [
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

    private constructor() { }

    public static Instance(): DataBase {
        if (!DataBase.instance) {
            DataBase.instance = new DataBase();
        }

        return DataBase.instance;
    }

    public getTodos(): ITodo[] {
        return this.todos;
    }

    public setTodo(todo: ITodo): ITodo {
        this.index++;
        const newTodo = {
            id: this.index,
            complete: todo.complete,
            description: todo.description
        }

        this.todos.push(newTodo);

        return newTodo;
    }

    public getTodo(id: number): ITodo {
        let todo = this.todos.filter(t => t.id === id);
        return todo[0];
    }

    public updateTodo(todo: ITodo): ITodo {
        const updateTodo = this.todos.map(t => {
            if (t.id === todo.id) {
                return todo;
            }
            return t;
        });
        this.todos = updateTodo;

        return this.getTodo(todo.id);
    }

    public deleteTodo(id: number): ITodo[] {
        const filter = (element) => element.id === id;
        const index = this.todos.findIndex(filter);
        this.todos.splice(index, 1);

        return this.todos;
    }
}
