import JSONAPIAdapter from '@ember-data/adapter/json-api';
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'http://api.coronastatistics.live',
    pathForType(){
        return 'countries';
    }
});
