import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class IndexRoute extends Route {
  @service userAuth;
  @action
  login(emails, password) {
    console.log(emails, password);
    let self = this;
    this.store
      .query('employee', { filter: { email: emails } })
      .then((employee) => {
        if (employee != null && employee.length) {
          employee = employee.firstObject;
          if (employee.password && employee.password === password) {
            self.userAuth.login(employee);
            self.transitionTo('section');
          }
        }
      }); // Select * from employee where email = user.email
  }
}
