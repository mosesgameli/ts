import { TodoItem } from "./todoItem";
export declare class TodoCollection {
    username: string;
    todoItems: TodoItem[];
    private nextId;
    private itemMap;
    constructor(username: string, todoItems?: TodoItem[]);
    addTodo(task: string): number;
    getTodoById(id: number): TodoItem;
    getTodoItems(includeComplete: boolean): TodoItem[];
    markComplete(id: number, complete: boolean): void;
    removeComplete(): void;
}
