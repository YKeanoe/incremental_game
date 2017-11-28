var app = angular.module('myApp');

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
    
    var xOffsetCenter = 10;
    var yOffsetcenter = 20;

    var GridLocation = [
        [(xOffset*3+xOffsetCenter),(yOffset*0+yOffsetcenter)],

        [(xOffset*2+xOffsetCenter),(yOffset*1+yOffsetcenter)],
        [(xOffset*3+xOffsetCenter),(yOffset*2+yOffsetcenter)],
        [(xOffset*4+xOffsetCenter),(yOffset*1+yOffsetcenter)],
        
        [(xOffset*1+xOffsetCenter),(yOffset*2+yOffsetcenter)],
        [(xOffset*2+xOffsetCenter),(yOffset*3+yOffsetcenter)],
        [(xOffset*3+xOffsetCenter),(yOffset*4+yOffsetcenter)],
        [(xOffset*4+xOffsetCenter),(yOffset*3+yOffsetcenter)],
        [(xOffset*5+xOffsetCenter),(yOffset*2+yOffsetcenter)],
                
        [(xOffset*0+xOffsetCenter),(yOffset*3+yOffsetcenter)],
        [(xOffset*1+xOffsetCenter),(yOffset*4+yOffsetcenter)],
        [(xOffset*2+xOffsetCenter),(yOffset*5+yOffsetcenter)],
        [(xOffset*3+xOffsetCenter),(yOffset*6+yOffsetcenter)],
        [(xOffset*4+xOffsetCenter),(yOffset*5+yOffsetcenter)],
        [(xOffset*5+xOffsetCenter),(yOffset*4+yOffsetcenter)],
        [(xOffset*6+xOffsetCenter),(yOffset*3+yOffsetcenter)],

        [(xOffset*0+xOffsetCenter),(yOffset*5+yOffsetcenter)],
        [(xOffset*1+xOffsetCenter),(yOffset*6+yOffsetcenter)],
        [(xOffset*2+xOffsetCenter),(yOffset*7+yOffsetcenter)],
        [(xOffset*3+xOffsetCenter),(yOffset*8+yOffsetcenter)],
        [(xOffset*4+xOffsetCenter),(yOffset*7+yOffsetcenter)],
        [(xOffset*5+xOffsetCenter),(yOffset*6+yOffsetcenter)],
        [(xOffset*6+xOffsetCenter),(yOffset*5+yOffsetcenter)],
        
        [(xOffset*0+xOffsetCenter),(yOffset*7+yOffsetcenter)],
        [(xOffset*1+xOffsetCenter),(yOffset*8+yOffsetcenter)],
        [(xOffset*2+xOffsetCenter),(yOffset*9+yOffsetcenter)],
        [(xOffset*3+xOffsetCenter),(yOffset*10+yOffsetcenter)],
        [(xOffset*4+xOffsetCenter),(yOffset*9+yOffsetcenter)],
        [(xOffset*5+xOffsetCenter),(yOffset*8+yOffsetcenter)],
        [(xOffset*6+xOffsetCenter),(yOffset*7+yOffsetcenter)],

        [(xOffset*0+xOffsetCenter),(yOffset*9+yOffsetcenter)],
        [(xOffset*1+xOffsetCenter),(yOffset*10+yOffsetcenter)],
        [(xOffset*2+xOffsetCenter),(yOffset*11+yOffsetcenter)],
        [(xOffset*3+xOffsetCenter),(yOffset*12+yOffsetcenter)],
        [(xOffset*4+xOffsetCenter),(yOffset*11+yOffsetcenter)],
        [(xOffset*5+xOffsetCenter),(yOffset*10+yOffsetcenter)],
        [(xOffset*6+xOffsetCenter),(yOffset*9+yOffsetcenter)],

        [(xOffset*0+xOffsetCenter),(yOffset*11+yOffsetcenter)],
        [(xOffset*1+xOffsetCenter),(yOffset*12+yOffsetcenter)],
        [(xOffset*2+xOffsetCenter),(yOffset*13+yOffsetcenter)],
        [(xOffset*3+xOffsetCenter),(yOffset*14+yOffsetcenter)],
        [(xOffset*4+xOffsetCenter),(yOffset*13+yOffsetcenter)],
        [(xOffset*5+xOffsetCenter),(yOffset*12+yOffsetcenter)],
        [(xOffset*6+xOffsetCenter),(yOffset*11+yOffsetcenter)]
    ];
    return GridLocation;
});
