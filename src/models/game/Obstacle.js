
export default class Obstacle {
    constructor (x1, y1, x2, y2) {
        this.x1 = x1
        this.y1 = y1
        this.x2 = x2
        this.y2 = y2
    }

    shift1 () {
        this.x1 -= 3
        this.x2 -= 3
    }
    hitDown(player){
        return (this.y2 >= player.y1 && ((player.x1 > this.x1 && player.x1 < this.x2) || (player.x2 > this.x1 && player.x2 < this.x2)));

    }
    hitUp(player){

        return (this.y1 <= player.y2 && ((player.x1 > this.x1 && player.x1 < this.x2) || (player.x2 > this.x1 && player.x2 < this.x2)));

    }

    passed(player){
        return player.x1 > this.x2 - 4 && player.x1 < this.x2
    }

}
