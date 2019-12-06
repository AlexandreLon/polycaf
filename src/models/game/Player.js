const JUMP_SIZE = 40;
const FALL_SIZE = 2;

export default class Player {
    constructor(x1, y1, x2, y2) {
        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;
    }

    jump() {

        this.y1 -= 1;
        this.y2 -= 1;
    }

    fall() {
        this.y1 += FALL_SIZE;
        this.y2 += FALL_SIZE;
    }
}
