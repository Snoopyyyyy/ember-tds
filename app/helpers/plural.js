import { helper } from '@ember/component/helper';

function plural(nb) {
  nb = nb + "";
  console.log(nb);
  switch (nb){
    case '0' :
      return "Aucun service séléctionné";
    case '1' :
      return nb+" service séléctionné";
    default:
      return nb+" services séléctionnés";
  }
}
export default helper(plural);
