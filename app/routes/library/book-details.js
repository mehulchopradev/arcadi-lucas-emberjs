import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({

    books: inject(),

    beforeModel(transition) {
        const { book_id } = transition.to.params;
        if (isNaN(book_id)) {
            this.transitionTo('library.books'); // abort the current transition to the book-details route
            // and take the user to the books route
        }
    },

    async model(params) {
        const { book_id } = params;
        const book = await this.books.getBookById(book_id, true);
        return book;
    }
});
