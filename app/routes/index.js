import Ember from 'ember';
import albums from '../models/album-fixtures';

export default Ember.Route.extend({
  model() {
    return albums;
  }
});
