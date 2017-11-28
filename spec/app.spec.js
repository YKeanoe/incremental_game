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

    describe('Scope Initialization Test', function () {
        it('Sim initialization should be 2', function() {    
            expect($scope.sim).toBeDefined();
            expect($scope.sim).toBe(2);
        });
        it('Zenny initialization should be 0', function() {    
            expect($scope.zenny).toBeDefined();
            expect($scope.zenny).toBe(0);
        });
        it('House initialization should be 0', function() {    
            expect($scope.house).toBeDefined();
            expect($scope.house).toBe(0);
        });
        it('Hamlet initialization should be 0', function() {    
            expect($scope.hamlet).toBeDefined();
            expect($scope.hamlet).toBe(0);
        });
        it('Village initialization should be 0', function() {    
            expect($scope.village).toBeDefined();
            expect($scope.village).toBe(0);
        });
        it('Town initialization should be 0', function() {    
            expect($scope.town).toBeDefined();
            expect($scope.town).toBe(0);
        });
        it('City initialization should be 0', function() {    
            expect($scope.city).toBeDefined();
            expect($scope.city).toBe(0);
        });
        it('Kingdom initialization should be 0', function() {    
            expect($scope.kingdom).toBeDefined();
            expect($scope.kingdom).toBe(0);
        });
        it('Empire initialization should be 0', function() {    
            expect($scope.empire).toBeDefined();
            expect($scope.empire).toBe(0);
        });
        it('Superpower Nation initialization should be 0', function() {    
            expect($scope.spnation).toBeDefined();
            expect($scope.spnation).toBe(0);
        });
        it('Death Rate initialization should be 0.5', function() {    
            expect($scope.deathRate).toBeDefined();
            expect($scope.deathRate).toBe(0.5);
        });
        it('Birth Rate initialization should be 1', function() {    
            expect($scope.birthRate).toBeDefined();
            expect($scope.birthRate).toBe(1);
        });
        it('Income Rate initialization should be 0.1', function() {    
            expect($scope.incomeRate).toBeDefined();
            expect($scope.incomeRate).toBe(0.1);
        });
        it('Zenny Rate initialization should be 0.2', function() {    
            expect($scope.zennyRate).toBeDefined();
            expect($scope.zennyRate).toBe(0.2);
        });
        it('House Rate initialization should be 0', function() {    
            expect($scope.houseRate).toBeDefined();
            expect($scope.houseRate).toBe(0);
        });
        it('Hamlet Rate initialization should be 0', function() {    
            expect($scope.hamletRate).toBeDefined();
            expect($scope.hamletRate).toBe(0);
        });
    });
});

