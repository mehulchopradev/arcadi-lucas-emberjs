import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
    bookModel: null,

    books: inject(),
    
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
        async onSave() {
            const { bookModel } = this;
            bookModel.publicationDate = '2020-12-03';
            const book = await this.books.createBook(bookModel);
            alert(`Book saved with id ${book.id}`);
        }
    }
});
