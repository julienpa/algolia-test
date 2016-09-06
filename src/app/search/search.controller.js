import algoliasearch from 'algoliasearch';

export class SearchController {

  constructor($scope, $log, $mdDialog, $document) {
    'ngInject';

    // make angular services usable in all methods
    this.$log = $log;
    this.$mdDialog = $mdDialog;
    this.$document = $document;

    this.client = algoliasearch('TU89584OLH', 'f641bdff3040acca0b1180311d248978');
    this.index = this.client.initIndex('products');
    this.searchText = '';
    this.hits = [];
    this.selectedItem = null;

    $scope.$watch(
      () => this.searchText,
      () => this.refresh()
    );
  }

  refresh() {
    this.index
      .search(this.searchText)
      .then((result) => {
        this.$log.debug(result);
        this.hits = result.hits;
      })
      .catch((error) => {
        this.$log.error(error);
      });
  }

  buy(event, productImage) {
    this.$mdDialog.show(
      this.$mdDialog.alert()
        .parent(angular.element(this.$document.body))
        .clickOutsideToClose(true)
        .title('That\'s a good choice!')
        .htmlContent('<p class="text-center md-padding"><img src="' + productImage + '"></p>')
        .ok('Go to checkout')
        .targetEvent(event)
    );
  }
}
