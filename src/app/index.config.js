export function config($logProvider, $mdThemingProvider) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

  // set theme
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('pink');
}
