export default class Contacts {
  datas;

  constructor(datas) {
    this.datas = datas;
  }

  get Contacts() {
    return this.datas.filterBy('isDeleted', false);
  }
  get deletedsCount() {
    return this.datas.filterBy('isDeleted', true).length;
  }
}
