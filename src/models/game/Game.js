import Obstacle from "./Obstacle";
import Line from "./Line";

const holeSize = 130;
const space = 200;
const obsWidth = 50;

export default class Game {

    constructor(canvasWidth,canvasHeight){
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.lines = [];
        this.lines.push(this.addRandomLine())



    }

    shift1(){
        this.lines.forEach(line => {
            line.shift1();
        })
    }
    createAndRemove(){
        if(this.lines[0].obs1.x2 < 0){
            this.lines.shift()
        }
        if(this.canvasWidth - this.lines[this.lines.length -1].obs1.x2 + space > 100 ){
            this.lines.push(this.addRandomLine());
        }
    }
    addRandomLine(){
        var holeLocation = this.getRandomInt(this.canvasHeight*0.25, this.canvasHeight*0.75 -holeSize );
        var x1 = 0;
        if(this.lines.length == 0){
            x1 = this.canvasWidth;
        }
        else{
            x1 = this.lines[this.lines.length - 1].obs1.x2 + space;
        }
        var obs1 = new Obstacle(x1, 0, x1 + obsWidth, holeLocation)
        var obs2 = new Obstacle(x1, holeLocation + holeSize, x1 + obsWidth, this.canvasHeight)
        return new Line(obs1,obs2);
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * Math.floor(max-min) + min);
    }
}