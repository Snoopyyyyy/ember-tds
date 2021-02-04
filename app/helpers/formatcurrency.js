import { helper } from '@ember/component/helper';

function formatcurrency(value, symbol) {
  value = value/2
  return value;
}

export default helper(formatcurrency);
