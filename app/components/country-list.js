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
        this.set('sortDefinition', [this.get('selectedOption') + ':desc'])
    },
    searchByName: function () {
      var input, filter, ul, li, a, i, txtValue;
      input = document.getElementById('search');
      filter = input.value.toUpperCase();
      ul = document.getElementById('countries');
      li = ul.getElementsByTagName('li');

      for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h5")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
    }
  }
});
