import Component from '@ember/component';
import { computed } from '@ember/object';
// import { A } from '@ember/array';

export default Component.extend({

    // internal attributes of the component
    checkedTodos: [],
    uncheckedTodos: [],
    todoList: [],

    didReceiveAttrs() {
        this._super(...arguments);

        const todos = this.todos;

        let todoList = this.todoList;
        if (todoList.length === 0) {
            todoList = JSON.parse(JSON.stringify(todos)); // clone of an array object
        }

        const newTodo = this.newTodo; // incoming attribute to the todo list component
        if (newTodo) {
            // find id of the newly created todo
            todoList.sort((todo1, todo2) => {
                // ascending order
                // negative value -> todo1 < todo 2
                // 0 -> todo1 == todo2
                // positive value -> todo1 > todo2
                return todo1.id - todo2.id
            });

            // grab the last todo
            const lastId = todoList[todoList.length-1].id;
            const newId = lastId + 1;
            todoList.pushObject({
                id: newId,
                title: newTodo,
                done: false,
                created: new Date(),
            });
        }

        this.set('todoList', todoList);
        this.set('checkedTodos', todoList.filter(todo => todo.done).map(todo => todo.id));
        this.set('uncheckedTodos', todoList.filter(todo => !todo.done).map(todo => todo.id));
    },

    // isDisabled internal object attribute `depends` on the incoming todos attribute
    // more importantly it depends on the `done` property of each todo object in todos attribute
    /* isDisabled: computed('todos.@each.done', function () {
        return this.todos.every(todo => !todo.done);
    }), */

    // isDisabled attribute depeneds on checkedTodos attribute
    isDisabled: computed('checkedTodos.[]', function () {
        return this.checkedTodos.length === 0;
    }),

    // depend on the `done` property of each todo object in todos attribute
    /* doneCount: computed('todos.@each.done', function() {
        return this.todos.filter(todo => todo.done).length;
    }), */

    // doneCount would depend on checkedTodos attribute
    doneCount: computed('checkedTodos.[]', function () {
        return this.checkedTodos.length;
    }),

    actions: {
        onClearCompletedTodos() {
            const todoList = this.todoList;
            const incompletedTodos = this.uncheckedTodos.map((todoId) => {
                return todoList.find(todo => todo.id === todoId);
            });
            
            this.set('todoList', incompletedTodos);
            this.set('checkedTodos', []);
        },

        onCheckboxInput(event) {
            const isChecked = event.target.checked;
            const todoId = parseInt(event.target.value);

            if (isChecked) {
                this.checkedTodos.pushObject(todoId);
                this.uncheckedTodos.removeObject(todoId);
            } else {
                this.uncheckedTodos.pushObject(todoId);
                this.checkedTodos.removeObject(todoId);
            }
        }
    }
});
