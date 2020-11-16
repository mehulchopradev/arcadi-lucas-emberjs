import Component from '@ember/component';

export default Component.extend({
    todosList: [
        {
            title: 'Learn programming',
            created: new Date(),
            done: true,
        },
        {
            title: 'Go for a movie',
            created: new Date(),
            done: true,
        },
        {
            title: 'learn Cooking',
            created: new Date(),
            done: false,
        }
    ]
});
