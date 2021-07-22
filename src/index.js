"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./todoItem");
const todoCollection_1 = require("./todoCollection");
let todos = [
    new todoItem_1.TodoItem(1, "Buy Flowers"),
    new todoItem_1.TodoItem(2, 'shabalalaitated'),
    new todoItem_1.TodoItem(3, "Yamah Knoorls"),
    new todoItem_1.TodoItem(4, "Gbemu Terrah", true)
];
let collection = new todoCollection_1.TodoCollection("Gbemu", todos);
console.clear();
console.log(`${collection.username}'s Todo List`);
// collection.addTodo(todoItem)
collection.removeComplete();
collection.getTodoItems(true).forEach(item => item.printDetails());
