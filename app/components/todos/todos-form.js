import Component from '@ember/component';

export default Component.extend({
    // internal attribute
    newTodo: '',

    actions: {
        onSave() {
            const newTodo = this.newTodo;
            const newTodoAdded = this.newTodoAdded; // incoming attribute to this component
            // newTodoAdded is a callable variable
            newTodoAdded(newTodo);
        }
    }
});
