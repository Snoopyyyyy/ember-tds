import { helper } from '@ember/component/helper';

function plurial(nb) {
  console.log(nb);
  return nb;
}

export default helper(plurial());
