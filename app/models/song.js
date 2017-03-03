import DS from 'ember-data';

const attr = DS.attr;
const belongsTo = DS.belongsTo;

export default DS.Model.extend({
    // id: attr('string'),
    track: attr('number'),
    name: attr('string'),
    duration: attr('number'),
    url: attr('string'),
    album: belongsTo('album')
});