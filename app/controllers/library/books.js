import Controller from '@ember/controller';

export default Controller.extend({
    bookFormVisible: false,

    actions: {
        onShowBookForm() {
            this.set('bookFormVisible', true);
        }
    }
});
