export function routerConfig ($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/', {
      templateUrl: 'app/search/search.html',
      controller: 'SearchController',
      controllerAs: 'ctrl'
    })
    .otherwise({
      redirectTo: '/'
    });
}
