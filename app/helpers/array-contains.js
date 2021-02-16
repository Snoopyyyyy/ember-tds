import { helper } from '@ember/component/helper'; // importation du helper

export default helper(function arrayContains(params/*, hash*/) { // definition du helper
  const [items, value,prop] = params; // recuperer les ellement passer en parametre
  let id=prop ||'id'
  return items.filterBy(id,value).length > 0; // return le résulatatt de l'operation logique de (la taille de la liste trier par id) > a 0
});
