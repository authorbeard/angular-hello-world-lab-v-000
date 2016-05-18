function MainController($scope) {
  $scope.props={
    deez: "nuts"
  }
}

angular
  .module('app')
  .controller('MainController', MainController)