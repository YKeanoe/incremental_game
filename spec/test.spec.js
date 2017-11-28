// require('/Vendors/jquery/jquery-3.2.1.min.js');
// var angular = require('../Vendors/angularjs-1.6.6/angular.min');
// var page = require('../Pages/qunit.html')
// require('/Vendors/angularjs-1.6.6/angular-route.min.js');
// require('/Vendors/angularjs-1.6.6/angular-resource.min.js');
// require('/Vendors/angularjs-1.6.6/angular-mocks.js');
// require('/Scripts/app.js');
// require('/Scripts/userService.js');
// require('/Scripts/GridLocation.js');
// require('/Scripts/buildingFactory.js');

describe('Main Controller Test', function () {
    
    var $controller, $rootScope, $scope, $interval, $route, $location;
    var userService, ModelInterval, GridLocation, buildingFactory;
    var controller;

    beforeEach(function(){
        // Load Module
        module('myApp');

        // Inject services and dependencies
        inject(function(_$controller_, _$rootScope_, $injector, _$interval_, _$location_, _$route_){
            $controller = _$controller_;
            $rootScope = _$rootScope_;
            $interval = _$interval_;
            $location = _$location_;
            $route = _$route_;            
            userService = $injector.get('userService');
            ModelInterval = $injector.get('ModelInterval');
            GridLocation = $injector.get('GridLocation');
            buildingFactory = $injector.get('buildingFactory');
         
            // Set path
            expect($route.current).toBeUndefined();
            $location.path('/');
            $rootScope.$digest();
        });

        // Set scope and controller with its dependencies
        $scope = $rootScope.$new();        
        controller = $controller('mainController', {
            $scope: $scope,
            userService: userService,
            ModelInterval: ModelInterval,
            GridLocation: GridLocation,
            buildingFactory: buildingFactory
        });
    });        

    it('test1', function() {    
        expect($scope.testVar).toBe(0);
    });

    it('test1Fail', function() {    
        expect($scope.testVar).toBe(1);
    });
    
});
