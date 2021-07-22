export declare class TodoItem {
    id: number;
    task: string;
    complete: boolean;
    constructor(id: number, task: string, complete?: boolean);
    printDetails(): void;
}
