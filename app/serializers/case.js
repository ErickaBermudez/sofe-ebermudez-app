import DS from 'ember-data';
export default DS.RESTSerializer.extend({
  primaryKey: 'cases',
  normalizeResponse(store, primaryModelClass, payload,id, requestType){
    payload = {cases: payload};
    return this._super(store,primaryModelClass,payload, id, requestType);
  }
});