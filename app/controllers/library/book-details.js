import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
    name: null,
    description: null,

    store: inject(),

    actions: {
        onSave() {
            const { name, description, model } = this;
            const review = this.store.createRecord('review', {
                name,
                description,
                book: model,
            });
            review.save();
        }
    }
});
