export default class Obstacle {
    constructor (x1, y1, x2, y2) {
        this.x1 = x1
        this.y1 = y1
        this.x2 = x2
        this.y2 = y2
    }

    shift1 () {
        this.x1 -= 1
        this.y1 -= 1
        this.x2 -= 1
        this.y2 -= 1
    }

}
