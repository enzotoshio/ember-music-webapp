import Ember from 'ember';

const inject = Ember.inject;
const computed = Ember.computed;

export default Ember.Component.extend({
    tagName: 'footer',
    classNames: ['now-playing'],
    player: inject.service(),
    song: computed.readOnly('player.song'),
    showCurrentTime: true,
    remainingTime: function() {
        return this.get('song.duration') - this.get('player.currentTime');
    }.property('song.duration', 'player.currentTime'),

    actions: {
        play() {
            this.get('player').resume();
        },

        pause() {
            this.get('player').pause();
        },

        toggleTimeDisplay() {
            this.toggleProperty('showCurrentTime');
        }
    }
});
