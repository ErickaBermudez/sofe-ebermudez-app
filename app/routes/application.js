import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  model() {

    return Ember.RSVP.hash({
      country: this.store.findAll('country'),
      case: this.store.findAll('case'),
      data: this.getData()
    });

  }

  async getData(){

    let currentData = await fetch('http://api.coronastatistics.live/countries');
    let current = await currentData.json();
    let totalCritical = 0;
    let todayCases = 0;
    let todayDeaths = 0;
    let casesPer1M = 0;
    let activeCases = 0;
    let totalRecovered = 0; 
    let totalDeaths = 0;

    for (var i = 0; i < current.length; i++) {
      totalCritical += current[i].critical;
      todayCases += current[i].todayCases;
      todayDeaths += current[i].todayDeaths;
      casesPer1M += current[i].casesPerOneMillion;
      activeCases += current[i].active;
      totalRecovered += current[i].recovered;
      totalDeaths += current[i].deaths;
    }

    let finishedCases = totalRecovered + totalDeaths; 

    let data = {
      totalCritical: totalCritical,
      todayCases: todayCases,
      todayDeaths: todayDeaths,
      casesPer1M: casesPer1M,
      activeCases: activeCases, 
      totalDeaths: totalDeaths,
      totalRecovered: totalRecovered,
      finishedCases: finishedCases
    }
    return data;
  }

  setupController(controller, model) {
    this._super(...arguments);
    Ember.set(controller, 'country', model.country);
    Ember.set(controller, 'case', model.case);
  }
}
