import DS from 'ember-data';

const attr = DS.attr;
const hasMany = DS.hasMany;

export default DS.Model.extend({
    // id: attr('string'),
    artwork: attr('string'),
    name: attr('string'),
    artist: attr('string'),
    isExplicit: attr('boolean'),
    songs: hasMany('songs')
});