import { helper } from '@ember/component/helper';

export default helper(function div(params/*, hash*/) {
  let res = params[0]/params[1];
  res *= 100;
  res = res.toFixed(2);
  return res;
});
