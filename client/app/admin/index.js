'use strict';

import angular from 'angular';
import routes from './admin.routes';
import AdminController from './admin.controller';

export default angular.module('panaloizApp.admin', ['panaloizApp.auth', 'ngRoute'])
  .config(routes)
  .controller('AdminController', AdminController)
  .name;
