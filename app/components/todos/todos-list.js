import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

    // internal attributes of the component
    checkedTodos: [],
    uncheckedTodos: [],
    todoList: [],

    didReceiveAttrs() {
        this._super(...arguments);

        const todos = this.todos;
        this.checkedTodos = todos.filter(todo => todo.done).map(todo => todo.id);
        this.uncheckedTodos = todos.filter(todo => !todo.done).map(todo => todo.id);
        this.todoList = todos;
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
            const todos = this.todos;
            const incompletedTodos = this.uncheckedTodos.map((todoId) => {
                return todos.find(todo => todo.id === todoId);
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
