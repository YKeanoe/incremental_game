function fillCanvas(){
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = 'rbg(200,200,200)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);    
    }
}


// a hex is 84x72
/*
12-60
6-72
0-84
6-72
12-60
*/

function draw(x, y, num) {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // if(num > 66){
        //     return;
        // }

        var triangleSideLength = 12;
        var TriangleHalfSideLength = triangleSideLength/2;

        var offset1 = TriangleHalfSideLength * 2;
        var offset2 = TriangleHalfSideLength;

        var rowY = triangleSideLength;
        var rowYOffset = rowY * 2;

        var rowX = 0;
        var rowNum = num - 1;
        if(num==0){
            // no triangle
            return;
        } else if(num<=9){
            // Top first part of hex
            rowX = (rowNum*TriangleHalfSideLength)+offset1;
            if(num%2==0){
                drawTriangleInvert(ctx, triangleSideLength,rowX,0);            
            }else{
                drawTriangle(ctx, triangleSideLength,rowX,0);
            }
        } else if(num<=20){
            // Top second part of hex
            rowX = ((rowNum-9)*TriangleHalfSideLength)+offset2;         
            if(num%2!=0){
                drawTriangleInvert(ctx, triangleSideLength,rowX,(rowY*1));            
            }else{
                drawTriangle(ctx, triangleSideLength,rowX,(rowY*1));
            }
        } else if(num<=33){
            // Top third part of hex
            rowX = (rowNum-20)*TriangleHalfSideLength;
            if(num%2==0){ 
                drawTriangleInvert(ctx, triangleSideLength,rowX,(rowY*2));            
            }else{
                drawTriangle(ctx, triangleSideLength,rowX,(rowY*2));
            }
        } else if(num<=46){
            // Middle bottom part of hex
            rowX = (rowNum-33)*TriangleHalfSideLength;
            if(num%2!=0){
                drawTriangle(ctx, triangleSideLength,rowX,(rowY*3));
            }else{
                drawTriangleInvert(ctx, triangleSideLength,rowX,(rowY*3));            
            }
        } else if(num<=57){
            // Middle bottom part of hex
            rowX = ((rowNum-46)*TriangleHalfSideLength)+offset2;
            if(num%2==0){
                drawTriangle(ctx, triangleSideLength,rowX,(rowY*4));
            }else{
                drawTriangleInvert(ctx, triangleSideLength,rowX,(rowY*4));            
            }
        } else{
            // Bottom part of hex
            rowX = ((rowNum-57)*TriangleHalfSideLength)+offset1;
            if(num%2!=0){
                drawTriangle(ctx, triangleSideLength,rowX,(rowY*5));
            }else{
                drawTriangleInvert(ctx, triangleSideLength,rowX,(rowY*5)); 
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
    ctx.fillStyle="green";
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
    ctx.fillStyle="red";
    ctx.fill();
    ctx.closePath();
}

var app = angular.module("myApp", ['ngRoute', 'ngResource']);
app.factory('ModelInterval', function ($interval, userService){
    var interval = $interval(function () {
        userService.UpdateModel();
    }, 1000);
    return interval;
});
// a hex is 84x72
app.factory('GridLocation', function(){
    var GridLocation = [
        [63,0],
        [0,36],
        [63,72],
        [126,36]
    ];
    return GridLocation;
});

app.factory('userService', ['$rootScope', function ($rootScope, $interval) {
        var service = {
            // Store how much points user have
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
    
            // Store how much (base) points is added per second
            basePointsPerSecond: {
                sim: 1,
                house : 0,
                hamlet : 0,
                village : 0,
                town : 0,
                city : 0,
                kingdom : 0,
                empire : 0,
                spnation : 0
            },

            // Store modifier for points per second
            modifier: {
                sim: 1,
                house : 0,
                hamlet : 0,
                village : 0,
                town : 0,
                city : 0,
                kingdom : 0,
                empire : 0,
                spnation : 0
            },

            UpdateModel: function(){
                service.model.sim += service.basePointsPerSecond.sim * service.modifier.sim;
                console.log("tick");
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
    
app.controller('houseController', function(userService, ModelInterval, GridLocation, $scope, $interval, $location) {
    $scope.sim = userService.model.sim;
    $scope.house = userService.model.house;
    $scope.hamlet = userService.model.hamlet;
    $scope.village = userService.model.village;
    $scope.town = userService.model.town;
    $scope.city = userService.model.city;
    $scope.kingdom = userService.model.kingdom;
    $scope.empire = userService.model.empire;
    $scope.spnation = userService.model.spnation;


    $scope.modelInterval = ModelInterval;


    $scope.$on('$routeChangeSuccess', function() {
        fillCanvas();
    });


    /*
    function checkGrid(){
        if($scope.sim < userService.model.sim){
            var difference = $scope.sim - userService.model.sim;
        }
    }
    */
    
    $interval(function () {
        $scope.sim = userService.model.sim;        
        if($scope.sim == 0){
            return;
        } else{
            var grid = Math.floor($scope.sim / 66);
            var rownum = $scope.sim % 67;
            var loc = GridLocation;
            draw(loc[grid][0],loc[grid][1], rownum);    
        }        
    }, 17);


});

app.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
    .when("/", {
        controller : 'houseController',
        templateUrl : 'Pages/house.html'
    })
    .when("/hamlet", {
        controller : 'houseController',        
        templateUrl : 'Pages/hamlet.html'
    })
            
});
    
