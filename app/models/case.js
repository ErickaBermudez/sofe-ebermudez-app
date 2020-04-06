import Model from '@ember-data/model';
import DS from 'ember-data';

const { attr } = DS;

export default class CaseModel extends Model {
    @attr('number') cases;
    @attr('number') deaths;
    @attr('number') recovered;
    @attr('number') totalCritical;
    @attr('number') todayCases;
}