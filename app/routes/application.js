import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
    model(){
        return this.store.findAll('country');
    }

    lenght(){
        return this.get('model.length');
    }
}

