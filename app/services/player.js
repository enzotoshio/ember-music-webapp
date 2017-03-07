import Ember from 'ember';

const run = Ember.run;

export default Ember.Service.extend({
    isPlaying: false,
    audioElement: null,
    song: null,
    currentTime: 0,

    play(song) {
        const songSrc = song.get('url');
        const audioElementSrc = this.get('audioElement.src');

        this.set('song', song);

        if(audioElementSrc !== songSrc) {
            this.set('audioElement.src', songSrc);
        }

        this.get('audioElement').play();
    },

    resume() {
        this.get('audioElement').play();
    },

    pause() {
        this.get('audioElement').pause();
    },

    setupAudioElement: function() {
        const el = document.createElement('audio');

        el.addEventListener('play', run.bind(this, 'startedPlaying'));
        el.addEventListener('pause', run.bind(this, 'stoppedPlaying'));
        el.addEventListener('timeupdate', run.bind(this, 'timeUpdated'));

        this.set('audioElement', el);
    }.on('init'),

    timeUpdated() {
        this.set('currentTime', Math.floor(this.get('audioElement.currentTime')));
    },

    startedPlaying() {
        this.set('isPlaying', true);
    },

    stoppedPlaying() {
        this.set('isPlaying', false);
    },

    willDestroy() {
        this.get('audioElement').pause();
        this.set('audioElement.src', '');
    }
});
