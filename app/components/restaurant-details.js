import Ember from 'ember';

export default Ember.Component.extend({
  favorites: Ember.inject.service(),

  actions: {
    addToFavs(place) {
      this.get('favorites').add(place);
    }
  }
});
