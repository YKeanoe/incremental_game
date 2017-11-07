function draw() {
    console.log("aaa");
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = "blue";
        ctx.fillRect(0, 0, canvas.width, canvas.height);    
        /*
        drawTriangle(ctx, 50,50,25,50);
        drawTriangle(ctx, 50,50,75,50);
        */
        /*
        for(var i=25; i <= 425; i+=50){
            drawTriangle(ctx, 50,50,i,50);
            drawTriangleInvert(ctx, 50,50,i+25,50);
        }
        */
    }
}

function drawTriangle(ctx, width, height, x, y){
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x-(width/2),100);
    ctx.lineTo(x+(width/2),100);
    ctx.fillStyle="red";
    ctx.fill();
    ctx.closePath();
}

function drawTriangleInvert(ctx, width, height, x, y){
    ctx.beginPath();
    ctx.moveTo(x,y+height);
    ctx.lineTo(x-(width/2),y);
    ctx.lineTo(x+(width/2),y);
    ctx.fillStyle="blue";
    ctx.fill();
    ctx.closePath();
}

//$(document).ready(function(){
    //draw();
//});

var app = angular.module("myApp", ['ngRoute', 'ngResource']);
app.factory('userService', ['$rootScope', function ($rootScope) {
        var service = {
            model: {
                sim: 0,
                house : 0,
                hamlet : 0,
                village : 0,
                town : 0,
                city : 0,
                kingdom : 0,
                empire : 0,
                spnation : 0
            },
    
            SaveState: function () {
                sessionStorage.userService = angular.toJson(service.model);
            },
            RestoreState: function () {
                service.model = angular.fromJson(sessionStorage.userService);
            }
        }
    
        $rootScope.$on("savestate", service.SaveState);
        $rootScope.$on("restorestate", service.RestoreState);
    
        return service;
    }]);
    
app.controller('appController', function(userService, $scope, $interval) {
    $scope.sim = userService.model.sim;
    $scope.house = 0;
    $scope.hamlet = 0;
    $scope.village = 0;
    $scope.town = 0;
    $scope.city = 0;
    $scope.kingdom = 0;
    $scope.empire = 0;
    $scope.spnation = 0;
    $scope.$on('$routeChangeSuccess', function() {
        draw();
    });
    
    $interval(function () {
        $scope.sim ++;
        userService.model.sim = $scope.sim;      
    }, 1000);

});
app.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
    .when("/", {
        controller : 'appController',
        templateUrl : 'Pages/house.html'
    })
    .when("/hamlet", {
        controller : 'appController',        
        templateUrl : 'Pages/hamlet.html'
    })
            
});
    
