import Model from '@ember-data/model';
import DS from 'ember-data';

const { attr } = DS; 

export default class CountryModel extends Model {
    @attr('string') country;
    @attr('number') cases;
    @attr('number') todayCases;
    @attr('number') deaths;
    @attr('number') todayDeaths;
    @attr('number') recovered;
    @attr('number') active;
    @attr('number') critical;
    @attr('number') casesPerOneMillion;
    @attr('number') deathsByOneMillion;
}