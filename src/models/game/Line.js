import 'Obstacle.js'

export default class Line {
    constructor(obs1, obs2){
        this.obs1 = obs1;
        this.obs2 = obs2;
    }

    shift1(){
        obs1.shift1();
        obs2.shift1();
    }

    hit(player){
        return obs1.hitDown() || obs2.hitUp();

    }

}