describe('Grid Location Factory Test', function () {
    var GridLocation;
    beforeEach(function(){
        // Load Module
        module('myApp');
        inject(function($injector){
            GridLocation = $injector.get('GridLocation');
        });
    });        

    it('There should be 44 hex grids', function() {    
        expect(GridLocation.length).toBe(44);
    });

    it('There should be no hex outside the canvas width', function() {    
        var max = 358;
        var out = false;
        for(var i=0; i < 44 ; i++){
            if((GridLocation[i][0] + 56) > max){
                out = true;
                break;
            }
        }
        expect(out).toBeFalsy("Some hex is out of canvas width");
    });
    
    it('There should be no hex outside the canvas height', function() {    
        var max = 476;
        var out = false;
        for(var i=0; i < 44 ; i++){
            if((GridLocation[i][1] + 48) > max){
                out = true;
                break;
            }
        }
        expect(out).toBeFalsy("Some hex is out of canvas height");
    });
});