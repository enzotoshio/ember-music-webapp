import Ember from 'ember';
import albums from '../models/album-fixtures';

export default Ember.Route.extend({
  model(params) {
    return albums.findBy('id', params.album_id);
  }
});
