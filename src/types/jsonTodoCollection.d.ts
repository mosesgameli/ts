import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";
export declare class JsonTodoCollection extends TodoCollection {
    userName: string;
    private database;
    constructor(userName: string, todoItems?: TodoItem[]);
    addTodo(task: string): number;
    markComplete(id: number, complete: boolean): void;
    removeComplete(): void;
    private storeTasks;
}
