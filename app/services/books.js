import Service, { inject } from '@ember/service';

export default Service.extend({

    store: inject(),

    async getAllBooks() {
        const books = await this.store.findAll('book');
        return books;
    },

    async getBookById(bookId, reload = false) {
        const obj = {};
        if (reload) {
            obj.reload = true;
        }

        const book = await this.store.findRecord('book', bookId, obj);
        return book;
    },

    async createBook(bookModel) {
        const book = this.store.createRecord('book', bookModel);
        await book.save()
        return book;
    },

    async getBookByTitle(title) {
        const books = await this.store.query('book', {
            title,
        });
        return books;
    }
});
