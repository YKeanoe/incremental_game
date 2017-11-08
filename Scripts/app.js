function fillCanvas(){
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = "blue";
        ctx.fillRect(0, 0, canvas.width, canvas.height);    
        
    }
}

function draw(num) {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        if(num > 66){
            return;
        }

        var triangleSideLength = 10;
        var TriangleHalfSideLength = 5;

        var offset1 = TriangleHalfSideLength * 2;
        var offset2 = TriangleHalfSideLength;

        var rowY = 10;
        var rowYOffset = rowY * 2;

        if(num<=9){
            // Top first part of hex
            if(num%2==0){
                drawTriangleInvert(ctx, triangleSideLength,(num*TriangleHalfSideLength)+offset1,rowY);            
            }else{
                drawTriangle(ctx, triangleSideLength,(num*TriangleHalfSideLength)+offset1,rowY);
            }
        } else if(num<=20){
            // Top second part of hex
            if(num%2!=0){
                drawTriangleInvert(ctx, triangleSideLength,((num-9)*TriangleHalfSideLength)+offset2,(rowY*2));            
            }else{
                drawTriangle(ctx, triangleSideLength,((num-9)*TriangleHalfSideLength)+offset2,(rowY*2));
            }
        } else if(num<=33){
            // Top third part of hex
            if(num%2==0){
                drawTriangleInvert(ctx, triangleSideLength,(num-20)*TriangleHalfSideLength,(rowY*3));            
            }else{
                drawTriangle(ctx, triangleSideLength,(num-20)*TriangleHalfSideLength,(rowY*3));
            }
        } else if(num<=46){
            // Middle bottom part of hex
            if(num%2!=0){
                drawTriangle(ctx, triangleSideLength,(num-33)*TriangleHalfSideLength,(rowY*4));
            }else{
                drawTriangleInvert(ctx, triangleSideLength,(num-33)*TriangleHalfSideLength,(rowY*4));            
            }
        } else if(num<=57){
            // Middle bottom part of hex
            if(num%2==0){
                drawTriangle(ctx, triangleSideLength,((num-46)*TriangleHalfSideLength)+offset2,(rowY*5));
            }else{
                drawTriangleInvert(ctx, triangleSideLength,((num-46)*TriangleHalfSideLength)+offset2,(rowY*5));            
            }
        } else{
            // Bottom part of hex
            if(num%2!=0){
                drawTriangle(ctx, triangleSideLength,((num-57)*TriangleHalfSideLength)+offset1,(rowY*6));
            }else{
                drawTriangleInvert(ctx, triangleSideLength,((num-57)*TriangleHalfSideLength)+offset1,(rowY*6));            
            }
        }
    }
}

// function to draw /\ triangle,
function drawTriangle(ctx, side, x, y){
    ctx.beginPath();
    // move to bottom left
    ctx.moveTo(x,y+side);
    // line to bottom right
    ctx.lineTo(x+side, y+side);
    // line to top
    ctx.lineTo(x+(side/2),y);
    ctx.fillStyle="red";
    ctx.fill();
    ctx.closePath();
}

// function to draw \/ triangle
function drawTriangleInvert(ctx, side, x, y){
    ctx.beginPath();
    // move to top left
    ctx.moveTo(x,y);
    // line to top right
    ctx.lineTo(x+side, y);
    // line to bottom
    ctx.lineTo(x+(side/2),y+side);
    ctx.fillStyle="green";
    ctx.fill();
    ctx.closePath();
}

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
        fillCanvas();
    });
    
    $interval(function () {
        $scope.sim ++;
        userService.model.sim = $scope.sim;  
        draw($scope.sim);
    }, 500);

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
    
