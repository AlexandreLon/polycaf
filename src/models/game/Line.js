import Obstacle from './Obstacle'

export default class Line {
    constructor(obs1, obs2){
        this.obs1 = obs1;
        this.obs2 = obs2;
    }

    shift1(){
        this.obs1.shift1();
        this.obs2.shift1();
    }

    hit(player){
        return this.obs1.hitDown(player) || this.obs2.hitUp(player);

    }
    passed(player){
        return this.obs1.passed(player);
        return obs1.hitDown() || obs2.hitUp();
    }

}
