const JUMP_SIZE = 10;
const FALL_SIZE = 5;

export default class Player {
    constructor(x1, y1, x2, y2) {
        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;
    }

    jump() {
        this.y1 -= JUMP_SIZE;
        this.y2 -= JUMP_SIZE;
    }

    fall() {
        this.y1 += FALL_SIZE;
        this.y2 += FALL_SIZE;
    }
}
