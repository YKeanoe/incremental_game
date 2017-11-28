describe('Building Factory Test', function () {
    var buildingFactory;
    beforeEach(function(){
        // Load Module
        module('myApp');

        // Inject services and dependencies
        inject(function($injector){
            buildingFactory = $injector.get('buildingFactory');
        });
    });        

    it('Building factory should be defined', function() {    
        expect(buildingFactory).toBeDefined();
    });
    
    it('House sim price should be 10', function() {    
        expect(buildingFactory.house.baseSimPrice).toBeDefined();
        expect(buildingFactory.house.simPrice).toBeDefined();
        expect(buildingFactory.house.baseSimPrice).toBe(10);
        expect(buildingFactory.house.simPrice).toBe(10);
    });
    
    it('House zenny price should be 5', function() {    
        expect(buildingFactory.house.baseZennyPrice).toBeDefined();
        expect(buildingFactory.house.zennyPrice).toBeDefined();
        expect(buildingFactory.house.baseZennyPrice).toBe(5);
        expect(buildingFactory.house.zennyPrice).toBe(5);
    });
});

