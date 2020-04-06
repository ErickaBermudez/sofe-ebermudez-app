import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
    model(){
        return Ember.RSVP.hash({
          country: this.store.findAll('country'),
          case: this.store.findAll('case')
        });
      }

      setupController(controller, model) {
        this._super(...arguments);
        Ember.set(controller, 'country', model.country);
        Ember.set(controller, 'case', model.case);
      }
}

