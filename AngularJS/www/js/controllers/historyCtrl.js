app.controller('historyCtrl', ['$scope', function($scope) {
    $scope.message = 'HelloHistory';

    $scope.data = [
        {
            id: 0,
            date: '2015.03.15',
            operation: 'use',
            result: 'fail'
        }, {
            id: 1,
            date: '2015.08.15',
            operation: 'add',
            result: 'success'
        }, {
            id: 2,
            date: '2012.03.15',
            operation: 'delete',
            result: 'fail'
        }, {
            id: 3,
            date: '2010.03.30',
            operation: 'get',
            result: 'success'
        }
    ];

    $scope.getData = function(){
        return $scope.data;
    }

    $scope.removeById = function(id){
        var buf = [];
        angular.forEach($scope.data, function(value, key) {
            if (key !== id) {
                buf.push(value);
            }
        })
        if ($scope.data.length == 1) {
            $scope.data = [];
        } else {
            $scope.data = buf;
        }
    }

}]);
