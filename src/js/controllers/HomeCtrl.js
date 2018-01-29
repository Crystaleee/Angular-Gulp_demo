angular.module('dempapp')
.controller('HomeCtrl', [
    '$scope',
    function($scope) {
        console.log('Loaded.');
        $scope.message = 'awesome';
    }
]);
