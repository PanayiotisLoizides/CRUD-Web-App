'use strict';

export default class AdminController {
  /*@ngInject*/
  constructor(User) {
    // Use the User $resource to fetch all users
    this.users = User.query();
  }

  delete(user) {
    user.$remove();
    this.users.splice(this.users.indexOf(user), 1);
  }

  update(user) {
  	this.user = user;
  	console.log(this.user);
  }

  save(user, MainController) {
  	this.user = user;
  	user.$save();
  	console.log(this.users);
  }
}
