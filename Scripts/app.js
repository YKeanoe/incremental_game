function fillCanvas(){
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        // ctx.fillStyle = 'rbg(200,200,200)';
        // ctx.fillRect(0, 0, canvas.width, canvas.height);    
    }
}

// Main draw function for the hex grid. Takes parameter of
// x and y for the grid top left location, and num for the
// nth triangles. 
// SPAGHETTI CODE WARNING
function draw(x, y, num, type) {
    // if(type == 0){
    //     num++
    // }
    num ++; 
    console.log("drawing " + num);
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        // Set triangle's height and width (same base&height)
        var triangleSideLength = 8;
        var triangleHalfSideLength = triangleSideLength/2;

        // Offset 1 and 2 for the x offset.
        var offset1 = triangleHalfSideLength * 2;
        var offset2 = triangleHalfSideLength;

        // RowX and RowY is used for the base of each row of triangles.
        var rowY = y;
        var rowYOffset = rowY * 2;
        var rowX = x;

        // RowNum for triangle number starting from 0 
        var rowNum = num - 1;


        if(num <= 9) {
            // Top first part of hex
            rowX += ( rowNum * triangleHalfSideLength ) + offset1;
            if(num % 2 == 0) {
                drawTriangleInvert(ctx, triangleSideLength, rowX, rowY, type);            
            } else {
                drawTriangle(ctx, triangleSideLength, rowX, rowY, type);
            }
        } else if(num <= 20) {
            // Top second part of hex
            rowX += ((rowNum - 9) * triangleHalfSideLength) + offset2; 
            rowY += triangleSideLength;
            if(num % 2 != 0) {
                drawTriangleInvert(ctx, triangleSideLength, rowX, rowY, type);            
            } else {
                drawTriangle(ctx, triangleSideLength, rowX, rowY, type);
            }
        } else if(num <= 33) {
            // Top third part of hex
            rowX += (rowNum - 20) * triangleHalfSideLength;
            rowY += triangleSideLength * 2;
            if(num % 2 == 0) { 
                drawTriangleInvert(ctx, triangleSideLength, rowX, rowY, type);            
            } else {
                drawTriangle(ctx, triangleSideLength, rowX, rowY, type);
            }
        } else if(num <= 46) {
            // Middle bottom part of hex
            rowX += (rowNum - 33) * triangleHalfSideLength;
            rowY += triangleSideLength * 3;
            if(num %2 != 0) {
                drawTriangle(ctx, triangleSideLength, rowX, rowY, type);
            } else {
                drawTriangleInvert(ctx, triangleSideLength, rowX, rowY, type);            
            }
        } else if(num <= 57) {
            // Middle bottom part of hex
            rowX += ((rowNum - 46) * triangleHalfSideLength) + offset2;
            rowY += triangleSideLength * 4;
            if(num % 2 == 0) {
                drawTriangle(ctx, triangleSideLength, rowX, rowY, type);
            } else{
                drawTriangleInvert(ctx, triangleSideLength, rowX, rowY, type);            
            }
        } else{
            // Bottom part of hex
            rowX += ((rowNum - 57) * triangleHalfSideLength) + offset1;
            rowY += triangleSideLength * 5;
            if(num %2 != 0) {
                drawTriangle(ctx, triangleSideLength, rowX, rowY, type);
            } else {
                drawTriangleInvert(ctx, triangleSideLength, rowX, rowY, type); 
            }
        }
    }
}

// function to draw /\ triangle,
function drawTriangle(ctx, side, x, y, type){
    if(type==0){
        ctx.globalCompositeOperation='source-over';
    } else{        
        ctx.globalCompositeOperation='destination-out';
    }

    ctx.beginPath();
    // move to bottom left
    ctx.moveTo(x, y + side);
    // line to bottom right
    ctx.lineTo(x + side, y + side);
    // line to top
    ctx.lineTo(x + (side / 2), y);
        ctx.fillStyle="white";        
    
    ctx.fill();
    ctx.closePath();
}

// function to draw \/ triangle
function drawTriangleInvert(ctx, side, x, y, type){
    if(type==0){
        ctx.globalCompositeOperation='source-over';
    } else{        
        ctx.globalCompositeOperation='destination-out';
    }

    ctx.beginPath();
    // move to top left
    ctx.moveTo(x, y);
    // line to top right
    ctx.lineTo(x + side, y);
    // line to bottom
    ctx.lineTo(x + (side / 2), y + side);
    
    ctx.fillStyle="white";        
    
    ctx.fill();
    ctx.closePath();
}

var app = angular.module("myApp", ['ngRoute', 'ngResource']);
// Service for the app main interval
app.factory('ModelInterval', function ($interval, userService){
    var interval = $interval(function () {
        userService.UpdateModel();
    }, 300);
    return interval;
});

// Grid location model
app.factory('GridLocation', function(){
    /*
    var width = 56;
    var height = 48;
    What the offset algorithm should be, but it look better if it's hard coded
    var xOffset = width * 0.75; // 45
    var yOffset = height * 0.5; // 25
    */
    var xCenter = 10;
    var yCenter = 10;

    var xOffset = 46;
    var yOffset = 25;
    
    var GridLocation = [
        [xOffset*3,yOffset*0],

        [xOffset*2,yOffset*1],
        [xOffset*3,yOffset*2],
        [xOffset*4,yOffset*1],
        
        [xOffset*1,yOffset*2],
        [xOffset*2,yOffset*3],
        [xOffset*3,yOffset*4],
        [xOffset*4,yOffset*3],
        [xOffset*5,yOffset*2],

        [xOffset*0,yOffset*3],
        [xOffset*1,yOffset*4],
        [xOffset*2,yOffset*5],
        [xOffset*3,yOffset*6],
        [xOffset*4,yOffset*5],
        [xOffset*5,yOffset*4],
        [xOffset*6,yOffset*3],
        
        [xOffset*0,yOffset*5],
        [xOffset*1,yOffset*6],
        [xOffset*2,yOffset*7],
        [xOffset*3,yOffset*8],
        [xOffset*4,yOffset*7],
        [xOffset*5,yOffset*6],
        [xOffset*6,yOffset*5],
 
        [xOffset*0,yOffset*7],
        [xOffset*1,yOffset*8],
        [xOffset*2,yOffset*9],
        [xOffset*3,yOffset*10],
        [xOffset*4,yOffset*9],
        [xOffset*5,yOffset*8],
        [xOffset*6,yOffset*7],
   
        [xOffset*0,yOffset*9],
        [xOffset*1,yOffset*10],
        [xOffset*2,yOffset*11],
        [xOffset*3,yOffset*12],
        [xOffset*4,yOffset*11],
        [xOffset*5,yOffset*10],
        [xOffset*6,yOffset*9]
    ];
    return GridLocation;
});

app.factory('userService', ['$rootScope', function ($rootScope, $interval) {
        var service = {
            // Store how much points user have
            model: {
                zenny: 0,
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
                zenny: 0,
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
                zenny: 0,
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
                service.model.sim += (service.basePointsPerSecond.sim * service.modifier.sim) * 0.3;
                //console.log("tick");
            },

            BuyHouse: function(num){
                // service.model.house += num;
                // service.model.sim -= num * 10;
                service.model.sim -= 1;
                
            },

            SaveState: function () {
                sessionStorage.userService = angular.toJson(service.model);
            },
            RestoreState: function () {
                service.model = angular.fromJson(sessionStorage.userService);
            }
        };
        $rootScope.$on("savestate", service.SaveState);
        $rootScope.$on("restorestate", service.RestoreState);
        return service;
    }]);
    
app.controller('houseController', function(userService, ModelInterval, GridLocation, $scope, $interval, $location) {
    // Scope for variables
    $scope.zenny = userService.model.zenny;
    $scope.sim = userService.model.sim;
    $scope.house = userService.model.house;
    $scope.hamlet = userService.model.hamlet;
    $scope.village = userService.model.village;
    $scope.town = userService.model.town;
    $scope.city = userService.model.city;
    $scope.kingdom = userService.model.kingdom;
    $scope.empire = userService.model.empire;
    $scope.spnation = userService.model.spnation;
    // Scope for main interval service
    $scope.modelInterval = ModelInterval;

    // Counter to store page's interval
    var counter;
    // pageTriangles store page's current triangles
    var pageTriangles = 0;
    // Store when the page stopped
    var stopTimer = 0;

    // Set on route change to fill the black canvas and check
    // if the page's have the correct amount of triangles, then
    // start the page interval.
    $scope.$on('$routeChangeSuccess', function() {
        $scope.sim = userService.model.sim;        
        //fillCanvas();
        checkGrid();
        $scope.pageInterval();
    });

    // Set to stop the page interval and ifvisible.js, to
    // preventing multiple interval running, before the route change.
    $scope.$on("$locationChangeStart", function(event) {
        ifvisible.off('blur');
        ifvisible.off('focus');
        stopPageInterval();
    });

    // checkGrid function checks the current page triangles
    // with the data. 
    function checkGrid(){
        if(Math.floor($scope.sim) == 0 && pageTriangles == 0){
            return;
        }
        //console.log($scope.sim + " ? " + pageTriangles)
        
        // Count the difference page's triangles with the data
        var diff = Math.floor($scope.sim) - pageTriangles;

        //console.log("diff = " + diff);
        // Get the grid locations
        var loc = GridLocation;  
        var grid, rownum;

        if(diff == 0){
            // If there's not difference, then return
            return;
        } else{
            if(diff > 0){
                console.log("1+ diff");
                // If there are positive difference, add using loop
                for(var i = pageTriangles; i<Math.floor($scope.sim); i++){
                    grid = Math.floor(i / 66);            
                    rownum = i % 66;            
                    draw(loc[grid][0],loc[grid][1], rownum, 0);
                    pageTriangles++;
                }
            } else{
                console.log("1- diff");
                console.log("scopesim" + $scope.sim);
                console.log("sersim" + userService.model.sim);
                // If there are negative difference, add using loop
                for(var i = pageTriangles; i>Math.floor($scope.sim); i--){
                    console.log("rem" + i);
                    grid = Math.floor(i / 66);            
                    rownum = i % 66;            
                    draw(loc[grid][0],loc[grid][1], rownum-1, 1);
                    pageTriangles--;
                }
            }
        }  
    }

    // PageInterval is function to run the page's interval
    $scope.pageInterval = function(){
        // Check if counter is running
        if ( angular.isDefined(counter) ) return;
        // Turn on interval
        counter = $interval(function(){
            // Save scopes var from service
            $scope.sim = userService.model.sim;
            // return if var is 0 (nothing to draw)     
            if($scope.sim == 0){
                return;
            }
            // Check grid
            checkGrid();
        }, 17);//17ms interval is 60fps
    };

    $scope.buyHouse = function(){
        userService.BuyHouse(1);
    };

    $scope.test2 = function(){
        console.log("aaa2");
        $scope.modelInterval = ModelInterval;
    };

    // stopPageInterval, like the name suggest, stops the page's
    // interval and set the counter to undefined.
    function stopPageInterval(){
        $interval.cancel(counter);
        counter = undefined;
    }

    // From ifvisible.js, it check if the browser is not focused.
    // Called only when the page is fully closed (different browser
    // tabbed is open).
    ifvisible.on("blur", function(){
        // TO DO
        // Capture the time of blur
        stopTimer = Date.now();
        stopPageInterval();
    });
    
    // From ifvisible.js, it check if the browser is back to focused.
    ifvisible.on("focus", function(){
        // TO DO
        // Capture the time of focused and add it to the data
        // not sure if it's chrome specific function, but the 
        // main interval function stops when the browser is not focused.
        // So onBlur should capture the time when page is blurred and 
        // onFocus should capture the focused time and add the counter
        // in between.
        var timeStart = Date.now();
        var timeRange = timeStart - stopTimer;
        var ticks = timeRange / 300;
        for(var i = 0; i < ticks; i++){
            userService.UpdateModel();            
        }
        $scope.sim = userService.model.sim;

        // Check grid and start page interval.
        checkGrid();
        $scope.pageInterval();
    });
});

// Route config for SPA (Single-Page-Application)
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
    });
});

// Filter for rounding up the number on page
app.filter('round', function () {
	/* Usage Examples:
	    - Round Nearest: {{ 4.4 | round }} // result is 4
	    - Round Up: {{ 4.4 | round:'':'up' }} // result is 5
	    - Round Down: {{ 4.6 | round:'':'down' }} // result is 4
	    ** Multiples
	    - Round by multiples of 10 {{ 5 | round:10 }} // result is 10
	    - Round UP by multiples of 10 {{ 4 | round:10:'up' }} // result is 10
	    - Round DOWN by multiples of 10 {{ 6 | round:10:'down' }} // result is 0
	*/
	return function (value, mult, dir) {
		dir = dir || 'nearest';
		mult = mult || 1;
		value = !value ? 0 : Number(value);
		if (dir === 'up') {
			return Math.ceil(value / mult) * mult;
		} else if (dir === 'down') {
			return Math.floor(value / mult) * mult;
		} else {
			return Math.round(value / mult) * mult;
		}
	};
});
