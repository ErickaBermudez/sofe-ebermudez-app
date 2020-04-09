import Ember from 'ember';
import {
  computed
} from '@ember/object';

export default Ember.Component.extend({
  tagName: 'ul',
  sortedCountries: Ember.computed.sort('countries', 'sortDefinition'),
  sortDefinition: ['deaths:desc'],
  actions: {
    setSelection: function (selected) {
      this.set('selectedOption', selected),
      console.log(this.get('selectedOption')),
      this.set('sortDefinition', [this.get('selectedOption')+':desc'])
    }
  }
});
