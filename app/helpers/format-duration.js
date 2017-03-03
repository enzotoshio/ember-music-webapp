import Ember from 'ember';

export function formatDuration([duration]) {
    if (duration === undefined) {
        return '0:00';
    }

    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    const parsedSeconds = (seconds < 10) ? `0${seconds}` : seconds;

    return `${minutes}:${parsedSeconds}`;
}

export default Ember.Helper.helper(formatDuration);