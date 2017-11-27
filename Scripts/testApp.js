var app = angular.module("tApp", []);

app.controller('tController', function($scope, tFactory, t2Factory) {
    $scope.a = 1;
    $scope.b = 1;
    $scope.c = 0;
    $scope.d = tFactory;

    $scope.sum = function() {
        $scope.c = $scope.a + $scope.b;
        return $scope.c;
    };
    $scope.tf = function(){
        return tFactory;
    }
    $scope.tf2 = function(){
        return t2Factory;
    }
});

app.factory('tFactory', function() {
    var x = 20;
    return x;
});

app.factory('t2Factory', function() {
    var y = 33;
    return y;
});
