import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    title: DS.attr('string'),
    price: DS.attr('number'),
    pages: DS.attr('number'),
    publicationHouse: DS.attr('string'),
    publicationDate: DS.attr('string'),
    reviews: DS.hasMany('review')
});
