import Controller from '@ember/controller';

export default Controller.extend({
    bookFormVisible: false,
    search: null,

    queryParams: ['title'],
    title: null,

    actions: {
        onShowBookForm() {
            this.set('bookFormVisible', true);
        },

        onSearch() {
            const { search } = this;
            this.set('title', search);
        }
    }
});
