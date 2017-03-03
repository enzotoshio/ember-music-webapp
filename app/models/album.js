import Ember from 'ember';
import DS from 'ember-data';

const attr = DS.attr;
const hasMany = DS.hasMany;
const computed = Ember.computed;

export default DS.Model.extend({
    // id: attr('string'),
    artwork: attr('string'),
    name: attr('string'),
    artist: attr('string'),
    isExplicit: attr('boolean'),
    songs: hasMany('songs'),

    songCount: computed.alias('songs.length'),

    songsDurations: computed.mapBy('songs', 'duration'),

    totalDuration: computed.sum('songsDurations')
});