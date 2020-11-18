import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return [
            {
                id: 1,
                title: 'Learn Programming',
                created: new Date(),
                done: false,
            },
            {
                id: 2,
                title: 'Go for a movie',
                created: new Date(),
                done: true,
            },
            {
                id: 3,
                title: 'learn Cooking',
                created: new Date(),
                done: false,
            }
        ];
    }
});
