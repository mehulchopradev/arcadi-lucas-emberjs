import Route from '@ember/routing/route';

export default Route.extend({
    async model() {
        // store object is directly available in the route and the controller
        const books = await this.store.findAll('book');
        return books; // list of ember data model records (book objects)
    }
});
