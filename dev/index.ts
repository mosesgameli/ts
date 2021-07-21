import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";

let todos: TodoItem[] = [
    new TodoItem(1, "Buy Flowers"),
    new TodoItem(2, 'shabalalaitated'),
    new TodoItem(3, "Yamah Knoorls"),
    new TodoItem(4, "Gbemu Terrah", true)
]

let collection: TodoCollection = new TodoCollection("Gbemu", todos)

console.clear()
console.log(`${collection.username}'s Todo List`)

let newId: number = collection.addTodo("Touch my soul")
let todoItem: TodoItem = collection.getTodoById(newId)

todoItem.printDetails()
// collection.addTodo(todoItem)

console.log(JSON.stringify(todoItem))