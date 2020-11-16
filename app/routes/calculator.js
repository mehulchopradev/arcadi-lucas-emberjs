import Route from '@ember/routing/route';
import fetch from 'fetch';

export default Route.extend({
    async model() {
        // code to fetch the model data of the calculator route
        const response = await fetch('http://localhost:3000/calculator');
        const data = await response.json();
        return data;
    }
    // the data returned by the model() is set as a `model` property in the `controller` of this route
});
