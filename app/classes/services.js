export default class Services {
  services = [];

  constructor(serv) {
    this.services = serv;
  }

  get countActive(){
    return this.services.filterBy('active',true).length;
  }

  get sumActive() {
    let sum = 0;
    for (let i = 0; i < this.services.filterBy('active',true).length; i++) {
      sum += this.services.filterBy('active',true)[i].price;
    }
    return sum;
  }

}
