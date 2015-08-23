app.controller('homeCtrl', ['$scope', function($scope) {
    $scope.sum = '410';
    $scope.title = 'Card *283';
    $scope.money = 'Add money';

    $scope.getAlert = function(){
        alert('Add money');
    }
    $scope.getSources = function() {
        alert('Sources');
    }
}]);
