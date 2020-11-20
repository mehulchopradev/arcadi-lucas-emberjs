import Controller from '@ember/controller';

export default Controller.extend({
    // internal attribute
    newTodo: null,

    actions: {
        onNewTodoAdded(newTodo) {
            this.set('newTodo', null);
            this.set('newTodo', newTodo);
        }
    }
});
