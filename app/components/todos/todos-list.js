import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

    // isDisabled internal object attribute `depends` on the incoming todos attribute
    // more importantly it depends on the `done` property of each todo object in todos attribute
    isDisabled: computed('todos.@each.done', function () {
        return this.todos.every(todo => !todo.done);
    }),

    // depend on the `done` property of each todo object in todos attribute
    doneCount: computed('todos.@each.done', function() {
        return this.todos.filter(todo => todo.done).length;
    }),

    actions: {
        onClearCompletedTodos() {
            const notCompletedTodos = this.todos.filter(todo => !todo.done);
            // TODO:
            this.set('todos', notCompletedTodos);
        }
    }
});
