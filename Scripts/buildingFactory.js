var app = angular.module('myApp');

// Grid location model
app.factory('buildingFactory', function(){
    var factory = {
        house: {
            simPrice : 10,
            zennyPrice : 5,
            baseSimPrice : 10,
            baseZennyPrice : 5
        },

        farm: {
            simPrice : 0,
            zennyPrice : 50,
            baseSimPrice : 0,
            baseZennyPrice : 50
        },
        
        barn: {
            simPrice : 0,
            zennyPrice : 100,
            baseSimPrice : 0,
            baseZennyPrice : 100
        },

        hamlet: {
            housePrice : 10,
            zennyPrice : 10
        }
    }

    return factory;
});
