// Colors store color code for hex
var colors = ["#89A0B0", "#AEDBC4", "#FACEC5", "#F26E86", "#A5C2D2", "#4EC4D0"];
// Randomizer store the color for each draw.
var randomizer = 0;

// ClearCanvas function use clearRect on the whole canvas.
function clearCanvas(){
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0,0,canvas.width, canvas.height);
    }
}

// Main draw function for the hex grid. Takes parameter of
// x and y for the grid top left location, and num for the
// nth triangles. 
// SPAGHETTI CODE WARNING
function draw(x, y, num, type) {
    num ++; 
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


        var rand, color;
        rand = randomizer;
        while(rand == randomizer){
            rand = Math.floor(Math.random() * 6);     
        }

        color = colors[rand];

        randomizer = rand;

        // console.log(randomizer);

        if(num <= 9) {
            // Top first part of hex
            rowX += ( rowNum * triangleHalfSideLength ) + offset1;
            if(num % 2 == 0) {
                drawTriangleInvert(ctx, triangleSideLength, rowX, rowY, type, color);            
            } else {
                drawTriangle(ctx, triangleSideLength, rowX, rowY, type, color);
            }
        } else if(num <= 20) {
            // Top second part of hex
            rowX += ((rowNum - 9) * triangleHalfSideLength) + offset2; 
            rowY += triangleSideLength;

            if(num % 2 != 0) {
                drawTriangleInvert(ctx, triangleSideLength, rowX, rowY, type, color);            
            } else {
                drawTriangle(ctx, triangleSideLength, rowX, rowY, type, color);
            }
        } else if(num <= 33) {
            // Top third part of hex
            rowX += (rowNum - 20) * triangleHalfSideLength;
            rowY += triangleSideLength * 2;


            if(num % 2 == 0) { 
                drawTriangleInvert(ctx, triangleSideLength, rowX, rowY, type, color);            
            } else {
                drawTriangle(ctx, triangleSideLength, rowX, rowY, type, color);
            }
        } else if(num <= 46) {
            // Middle bottom part of hex
            rowX += (rowNum - 33) * triangleHalfSideLength;
            rowY += triangleSideLength * 3;


            if(num %2 != 0) {
                drawTriangle(ctx, triangleSideLength, rowX, rowY, type, color);
            } else {
                drawTriangleInvert(ctx, triangleSideLength, rowX, rowY, type, color);            
            }
        } else if(num <= 57) {
            // Middle bottom part of hex
            rowX += ((rowNum - 46) * triangleHalfSideLength) + offset2;
            rowY += triangleSideLength * 4;


            if(num % 2 == 0) {
                drawTriangle(ctx, triangleSideLength, rowX, rowY, type, color);
            } else{
                drawTriangleInvert(ctx, triangleSideLength, rowX, rowY, type, color);            
            }
        } else{
            // Bottom part of hex
            rowX += ((rowNum - 57) * triangleHalfSideLength) + offset1;
            rowY += triangleSideLength * 5;

            
            if(num %2 != 0) {
                drawTriangle(ctx, triangleSideLength, rowX, rowY, type, color);
            } else {
                drawTriangleInvert(ctx, triangleSideLength, rowX, rowY, type, color); 
            }
        }
    }
}

// function to draw /\ triangle,
function drawTriangle(ctx, side, x, y, type, color){
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
    
    ctx.fillStyle=color;        
    ctx.fill();
    ctx.closePath();
}

// function to draw \/ triangle
function drawTriangleInvert(ctx, side, x, y, type, color){
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
    
    ctx.fillStyle=color;        
    
    ctx.fill();
    ctx.closePath();
}

function changeActiveTab(route){
    if(route == "/"){
        $("#panel-tab>ul>li.active").removeClass("active");
        $("#panel-tab>ul>li:nth-of-type(1)").addClass( "active" );        
    } else if(route == "/hamlet"){
        $("#panel-tab>ul>li.active").removeClass("active");
        $("#panel-tab>ul>li:nth-of-type(2)").addClass( "active" );
    }else if(route == "/village"){
        $("#panel-tab>ul>li.active").removeClass("active");
        $("#panel-tab>ul>li:nth-of-type(3)").addClass( "active" );
    }else if(route == "/town"){
        $("#panel-tab>ul>li.active").removeClass("active");
        $("#panel-tab>ul>li:nth-of-type(4)").addClass( "active" );
    }else if(route == "/city"){
        $("#panel-tab>ul>li.active").removeClass("active");
        $("#panel-tab>ul>li:nth-of-type(5)").addClass( "active" );
    }else if(route == "/kingdom"){
        $("#panel-tab>ul>li.active").removeClass("active");
        $("#panel-tab>ul>li:nth-of-type(6)").addClass( "active" );
    }else if(route == "/empire"){
        $("#panel-tab>ul>li.active").removeClass("active");
        $("#panel-tab>ul>li:nth-of-type(7)").addClass( "active" );
    }else {
        $("#panel-tab>ul>li.active").removeClass("active");
        $("#panel-tab>ul>li:nth-of-type(9)").addClass( "active" );
    }
}

var app = angular.module("myApp", ['ngRoute', 'ngResource']);
// Service for the app main interval
app.factory('ModelInterval', function ($interval, userService){
    var interval = $interval(function () {
        userService.UpdateModel();
    }, 17);
    return interval;
});

app.controller('parentController', function(userService, $scope, $interval) {
    $scope.phouse = userService.model.house;        
    $scope.phamlet = userService.model.hamlet;        
    $scope.pvillage = userService.model.village;        
    $scope.ptown = userService.model.town;        
    $scope.pcity = userService.model.city;        
    $scope.pkingdom = userService.model.kingdom;        
    $scope.pempire = userService.model.empire;        
    $scope.pspnation = userService.model.spnation;        
    var parentInterval;

    $scope.pageInterval = function(){
        // Check if counter is running
        if ( angular.isDefined(parentInterval) ) return;
        // Turn on interval
        parentInterval = $interval(function(){
            // Save scopes var from service
            $scope.phouse = userService.model.house;        
            $scope.phamlet = userService.model.hamlet;        
            $scope.pvillage = userService.model.village;        
            $scope.ptown = userService.model.town;        
            $scope.pcity = userService.model.city;        
            $scope.pkingdom = userService.model.kingdom;        
            $scope.pempire = userService.model.empire;        
            $scope.pspnation = userService.model.spnation;      
            
            /*
            $scope.phouse = 1;        
            $scope.phamlet = 1;        
            $scope.pvillage = 1;        
            $scope.ptown = 1;        
            $scope.pcity = 1;        
            $scope.pkingdom = 1;        
            $scope.pempire = 1;        
            $scope.pspnation = 1;   
            */

        }, 17);//17ms interval is 60fps
    };
    $scope.pageInterval();
});
        

app.controller('mainController', function(userService, ModelInterval, GridLocation, buildingFactory, $scope, $interval, $location, $route) {
    // Scope for variables
    updatePageScope();

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
        // $scope.sim = userService.model.sim;        
        // $scope.house = userService.model.house;   
        console.log($route.current.originalPath);     
        changeActiveTab($route.current.originalPath);
        updatePageScope();
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

    function updatePageScope(){
        $scope.zenny = userService.model.zenny;
        $scope.sim = userService.model.sim;

        // To be added. birth and death rate
        $scope.birthRate = userService.GetBirthRate();
        $scope.deathRate = userService.GetDeathRate();
        $scope.simRate = userService.GetSimRate();
        $scope.zennyRate = userService.GetZennyRate();

        if($route.current.originalPath == "/"){
            $scope.house = userService.model.house;
            $scope.houseSPrice = buildingFactory.house.simPrice;
            $scope.houseZPrice = buildingFactory.house.zennyPrice;        
            $scope.haHouse = GetAvailable("house", "half");        
            $scope.fHouse = GetAvailable("house", "full");        
            $scope.farm = userService.model.farm;        
            $scope.farmZPrice = buildingFactory.farm.zennyPrice;                    
            $scope.haFarm = GetAvailable("farm", "half");        
            $scope.fFarm = GetAvailable("farm", "full");        
            $scope.barn = userService.model.barn;        
            $scope.barnZPrice = buildingFactory.barn.zennyPrice;                    
            $scope.haBarn = GetAvailable("barn", "half");        
            $scope.fBarn = GetAvailable("barn", "full");        
        } else if($route.current.originalPath == "/hamlet"){
            $scope.hamlet = userService.model.hamlet;        
        }else if($route.current.originalPath == "/village"){
            $scope.village = userService.model.village;        
        }else if($route.current.originalPath == "/town"){
            $scope.town = userService.model.town;        
        }else if($route.current.originalPath == "/city"){
            $scope.city = userService.model.city;        
        }else if($route.current.originalPath == "/kingdom"){
            $scope.kingdom = userService.model.kingdom;        
        }else if($route.current.originalPath == "/empire"){
            $scope.empire = userService.model.empire;        
        }else {
            $scope.spnation = userService.model.spnation;        
        }
    }

    // GetAvailable function take 2 parameter, type for building type/name and 
    // getter for full or half. The function will then return the amount that 
    // the user can purchase.
    function GetAvailable(type, getter){
        var ret = 0;
        var money,price;
        if(type == "house"){
            if(getter == "half"){
                ret = Math.floor($scope.sim / (buildingFactory.house.simPrice*2));
            } else {
                ret = Math.floor($scope.sim / buildingFactory.house.simPrice);
            }
        } else if(type == "farm"){
            money = $scope.zenny;
            price = buildingFactory.farm.zennyPrice;
            while(money >= price){
                ret++;
                money -= price;                
                price += buildingFactory.farm.baseZennyPrice;
            }
            if(getter == "half"){
                ret = Math.floor(ret/2);
            }
        } else if(type == "barn"){
            money = $scope.zenny;
            price = buildingFactory.barn.zennyPrice;
            while(money >= price){
                ret++;
                money -= price;                
                price += buildingFactory.barn.baseZennyPrice;
            }
            if(getter == "half"){
                ret = Math.floor(ret/2);
            }
        }
        
        if(ret == 0){
            return 1;
        } else {
            return ret;
        }
    }

    $scope.checkBuyHouse = function(num){
        if($scope.zenny >= num * buildingFactory.house.zennyPrice && $scope.sim >= buildingFactory.house.simPrice * num){
            return false;
        } else{
            return true;
        }
    };

    $scope.checkBuyFarm = function(num){
        if($scope.zenny >= num * buildingFactory.farm.zennyPrice){
            return false;
        } else{
            return true;
        }
    };

    $scope.checkBuyBarn = function(num){
        if($scope.zenny >= num * buildingFactory.barn.zennyPrice){
            return false;
        } else{
            return true;
        }
    };

    // checkGrid function checks the current page triangles
    // with the data. 
    function checkGrid(){
        // Return if nothing to draw.
        if(Math.floor($scope.sim) == 0 && pageTriangles == 0){
            return;
        }
        
        // Return if page is full
        if(pageTriangles > 2902){
            return;
        }

        // Count the difference page's triangles with the data
        var diff = Math.floor($scope.sim) - pageTriangles;

        // Get the grid locations
        var loc = GridLocation;  
        var grid, rownum;

        if(diff == 0){
            // If there's not difference, then return
            return;
        } else{
            if(diff > 0){
                // If there are positive difference, add using loop
                for(var i = pageTriangles; i<Math.floor($scope.sim); i++){
                    grid = Math.floor(i / 66);            
                    rownum = i % 66;            
                    draw(loc[grid][0],loc[grid][1], rownum, 0);
                    pageTriangles++;
                }
            } else{
                /*
                // If there are negative difference, add using loop
                for(var i = pageTriangles; i>Math.floor($scope.sim); i--){
                    console.log("rem" + i);
                    grid = Math.floor(i / 66);            
                    rownum = i % 66;            
                    draw(loc[grid][0],loc[grid][1], rownum-1, 1);
                    pageTriangles--;
                }*/
                // Changed to just clear canvas and redraw from scratch.
                // Clearing each triangles leave some pixels
                clearCanvas();
                pageTriangles = 0;
                checkGrid();
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
            updatePageScope();
            
            // return if var is 0 (nothing to draw)     
            if($scope.sim == 0){
                return;
            } else{
                checkGrid();            
            }
        }, 17);//17ms interval is 60fps
    };

    $scope.buyHouse = function(num){
        if(num == 1){
            userService.BuyHouse(1);            
        } else if(num == 2){
            userService.BuyHouse($scope.haHouse);
        }else if(num == 3){
            userService.BuyHouse($scope.fHouse);
        } else{
            // *1 to change iHouse to int
            userService.BuyHouse($scope.iHouse*1);            
        }
    };

    $scope.buyFarm = function(num){
        if(num == 1){
            userService.BuyFarm(1);            
        } else if(num == 2){
            userService.BuyFarm($scope.haFarm);            
        }else if(num == 3){
            userService.BuyFarm($scope.fFarm);            
        } else{
            // *1 to change iFarm to int
            userService.BuyFarm($scope.iFarm*1);            
        }
    };

    $scope.buyBarn = function(num){
        if(num == 1){
            userService.BuyBarn(1);            
        } else if(num == 2){
            userService.BuyBarn($scope.haBarn);            
        }else if(num == 3){
            userService.BuyBarn($scope.fBarn);            
        } else{
            // *1 to change iFarm to int
            userService.BuyBarn($scope.iBarn*1);            
        }
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
    // Capture the time of focused and add it to the data
    // not sure if it's chrome specific function, but the 
    // main interval function stops when the browser is not focused.
    // So onBlur capture the time when page is blurred and 
    // onFocus should capture the focused time and add the counter
    // in between.
    ifvisible.on("focus", function(){
        var timeStart = Date.now();
        var timeRange = timeStart - stopTimer;
        var ticks = timeRange / 17;
        for(var i = 0; i < ticks; i++){
            userService.UpdateModel(); 
        }
        updatePageScope();
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
        controller : 'mainController',
        templateUrl : 'Pages/house.html'
    })
    .when("/hamlet", {
        controller : 'mainController',        
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