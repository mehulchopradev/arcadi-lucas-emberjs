import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
    bookModel: null,

    store: inject(),
    
    init() {
        this._super(...arguments);

        this.bookModel = {
            title: null,
            price: null,
            pages: null,
            publicationHouse: null,
        }
    },

    actions: {
        onSave() {
            const { bookModel } = this;
            bookModel.publicationDate = '2020-12-03';
            const book = this.store.createRecord('book', bookModel);
            book.save(); // makes a POST call to the server with the book data
        }
    }
});
