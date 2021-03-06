import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  location: DS.attr(),
  style: DS.attr(),
  neighborhood: DS.attr(),
  price: DS.attr('number'),
  notes: DS.attr(),
  img: DS.attr(),
  reviews: DS.hasMany('review', {async: true}),

  favorites: Ember.inject.service(),

  inFavorites: Ember.computed('favorites.places.[]', function(){
    return this.get('favorites').includes(this);
  })

});
