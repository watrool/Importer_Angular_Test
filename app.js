var dave2App = angular.module("dave2App", ["importer",'angularFileUpload', 'ngRoute']);

dave2App.config(["$routeProvider", function($routeProvider){
  $routeProvider.when('/Importer', {
    templateUrl : 'app_importer/app_importer.html',
    controller: 'importerCtrl'
  })
  .otherwise({redirectTo: '/'});
}]);
