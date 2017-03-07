import Ember from 'ember';

const inject = Ember.inject;

export default Ember.Component.extend({
    tagName: 'tr',
    classNameBindings: ['isCurrentSong'],

    player: inject.service(),
    song: null,
    isCurrentSong: function() {
        return this.get('player.song') === this.get('song');
    }.property('player.song', 'song'),

    actions: {
        play() {
            this.get('player').play(this.get('song'));
        },

        pause() {
            this.get('player').pause();
        }
    }
});
