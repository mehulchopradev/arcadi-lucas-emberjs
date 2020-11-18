import Component from '@ember/component';

export default Component.extend({
    // internal attribute
    newTodo: '',

    actions: {
        onSave() {
            const newTodo = this.newTodo;
            debugger;
        }
    }
});
