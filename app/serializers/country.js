import DS from 'ember-data';
export default DS.RESTSerializer.extend({
  primaryKey: 'country',
  normalizeResponse(store, primaryModelClass, payload,id, requestType){
    payload = {country: payload};
    return this._super(store,primaryModelClass,payload, id, requestType);
  }
});