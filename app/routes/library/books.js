import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({

    books: inject(),

    queryParams: {
        title: {
            refreshModel: true,
        }
    },

    async model(params, transition) {
        const { title } = transition.to.queryParams;
        let books;
        if (title) {
            books = await this.books.getBookByTitle(title);
        } else {
            // store object is directly available in the route and the controller
            books = await this.books.getAllBooks();
        }

        return books; // list of ember data model records (book objects)
    }
});
