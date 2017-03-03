import Ember from 'ember';

const run = Ember.run;

export default Ember.Service.extend({
    isPlaying: false,
    audioElement: null,

    play(song) {
        const songSrc = song.get('url');
        const audioElementSrc = this.get('audioElement.src');

        if(audioElementSrc !== songSrc) {
            this.set('audioElement.src', songSrc);
        }

        this.get('audioElement').play();
    },

    pause() {
        this.get('audioElement').pause();
    },

    toggle() {
        this.toggleProperty('isPlaying');
    },

    setupAudioElement: function() {
        const el = document.createElement('audio');

        el.addEventListener('play', run.bind(this, 'toggle'));
        el.addEventListener('pause', run.bind(this, 'toggle'));

        this.set('audioElement', el);
    }.on('init'),

    willDestroy() {
        this.get('audioElement').pause();
        this.set('audioElement.src', '');
    }
});
