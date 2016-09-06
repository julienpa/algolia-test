import { config } from './index.config';
import { routerConfig } from './index.route';
import { SearchController } from './search/search.controller';

angular.module('algoliaTest', ['ngAnimate', 'ngSanitize', 'ngMessages', 'ngRoute', 'ngMaterial'])
  .config(config)
  .config(routerConfig)
  .controller('SearchController', SearchController);
