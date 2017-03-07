import Ember from 'ember';

const inject = Ember.inject;
const computed = Ember.computed;

export default Ember.Component.extend({
    tagName: 'footer',
    classNames: ['now-playing'],
    player: inject.service(),
    song: computed.readOnly('player.song')
});
