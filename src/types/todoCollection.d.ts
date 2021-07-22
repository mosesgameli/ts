import { TodoItem } from "./todoItem";
declare type ItemCounts = {
    total: number;
    incomplete: number;
};
export declare class TodoCollection {
    username: string;
    todoItems: TodoItem[];
    private nextId;
    protected itemMap: Map<number, TodoItem>;
    constructor(username: string, todoItems?: TodoItem[]);
    addTodo(task: string): number;
    getTodoById(id: number): TodoItem;
    getTodoItems(includeComplete: boolean): TodoItem[];
    markComplete(id: number, complete: boolean): void;
    removeComplete(): void;
    getItemCounts(): ItemCounts;
}
export {};
