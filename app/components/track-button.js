import Ember from 'ember';

const inject = Ember.inject;

export default Ember.Component.extend({
    player: inject.service(),
    isPlaying: function() {
        return this.get('isCurrentSong') && this.get('player.isPlaying');
    }.property('isCurrentSong', 'player.isPlaying'),
    song: null,
    isCurrentSong: function() {
        return this.get('player.song') === this.get('song');
    }.property('player.song', 'song'),

    actions: {
        play() {
            this.sendAction('play');
        },

        pause() {
            this.sendAction('pause');
        }
    }
});
