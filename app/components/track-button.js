import Ember from 'ember';

const inject = Ember.inject;

export default Ember.Component.extend({
    isPlaying: false,
    player: inject.service(),

    classNameBindings: ['isPlaying'],

    actions: {
        play() {
            this.get('player').play(this.get('song'));
            this.toggle();
        },

        pause() {
            this.get('player').pause();
            this.toggle();
        }
    },

    toggle() {
        this.toggleProperty('isPlaying');
    }
});
