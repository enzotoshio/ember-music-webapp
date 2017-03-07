import DS from 'ember-data';
import Ember from 'ember';

const attr = DS.attr;
const belongsTo = DS.belongsTo;
const computed = Ember.computed;

export default DS.Model.extend({
    // id: attr('string'),
    track: attr('number'),
    name: attr('string'),
    duration: attr('number'),
    url: attr('string'),
    album: belongsTo('album'),
    artwork: computed.alias('album.artwork'),
    artist: computed.alias('album.artist')
});