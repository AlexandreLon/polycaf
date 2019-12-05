import Obstacle from "./Obstacle";

const holeSize = 300;
const space = 100;
const obsWidth = 100;

class Game {

    constructor(canvasWidth,canvasHeight){
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.lines = [];
        this.lines.push(addRandomLine())


    }

    shift1(){
        for (let i = 0 ; i< lines.length ; i++){
            this.lines[i].shift1();
        }
    }
    createAndRemove(){
        if(lines[0].x2 < 0){
            this.lines.push(new Line())
        }
    }
    addRandomLine(){
        var holeLocation = this.getRandomInt(this.canvasHeight*0.25, this.canvasHeight*0.75 -holeSize );
        var x1 ;
        if(lines.length == 0){
            x1 = this.canvasWidth;
        }
        else{
            x1 = this.lines[this.lines.length - 1].x2 + space;
        }
        var obs1 = new Obstacle(x1, 0, x1 + obsWidth, holeLocation)
        var obs2 = new Obstacle(x1, holeLocation + holeSize, x1 + obsWidth, this.canvasHeight)
        lines.push(new Line(obs1,obs2));
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * Math.floor(max-min) + min);
    }
}