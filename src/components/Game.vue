<template>
    <div>
        <canvas id="myCanvas" width="1200" height="600"></canvas>
    </div>
</template>

<script>
    import Game from '../models/game/Game'
    import Player from "../models/game/Player";
    export default {
        name: "Game.vue",
        data(){
            return{
                ctx: null,
                game:null,
                canvas : null,
                player : null,
                interval : true,
                intervalItem : null,
                score : 0
            }
        },
        methods:{
            drawObstacle(obstacle){
                this.ctx.fillRect(obstacle.x1,obstacle.y1,obstacle.x2 - obstacle.x1,obstacle.y2 - obstacle.y1)

            },
            drawLine(line){
                this.drawObstacle(line.obs1)
                this.drawObstacle(line.obs2)
            },
            drawGame(game){
                this.ctx.fillStyle = "white";
                this.ctx.fillRect(0,0,game.canvasWidth,game.canvasHeight);
                this.ctx.fillStyle = "blue";
                this.ctx.fillText(this.score, this.canvas.width/2, this.canvas.height/2);
                this.ctx.fillStyle = "black";


                const that = this;

                game.lines.forEach(line => {
                    that.drawLine(line);
                })


            },
            drawPlayer(player){
                this.ctx.fillStyle = "red";
                this.ctx.fillRect(player.x1,player.y1,player.x2 - player.x1,player.y2 - player.y1);
                this.ctx.fillStyle = "black";
            },
            update() {
                this.game.shift1();
                this.game.createAndRemove()
                this.drawGame(this.game);
                this.drawPlayer(this.player)
                this.player.fall()
                const that = this;
                this.game.lines.forEach(line =>{
                    if(line.hit(that.player)){
                        that.interval = false;
                        return;
                    }
                    if(line.passed(this.player)){
                        that.score ++;
                    }

                });



            },
            listenerPlayer(){
                const that = this;
                document.addEventListener('click', function(event) {
                    if(that.interval){
                        for (let i =0; i< 40; i++){
                            that.player.jump();
                            that.drawPlayer(that.player)

                        }
                    }



                }, false);
                document.addEventListener('keypress', function(event) {
                    if(that.interval){

                        for (let i =0; i< 40; i++){
                            that.player.jump();
                            that.drawPlayer(that.player)

                        }
                    }




                }, false);
            }
        },
        mounted(){
            this.canvas = document.getElementById("myCanvas");
             this.ctx = this.canvas.getContext('2d');
             this.game = new Game(this.canvas.width,this.canvas.height);
             this.player = new Player(100,this.canvas.height/2,150,this.canvas.height/2+50);
             this.listenerPlayer();
             this.ctx.font = "30px Arial";
            this.ctx.fillText(this.score, this.canvas.width/2, this.canvas.height/2);


            this.intervalItem = setInterval(this.update, 17);

        },
        watch: {
            interval: function (val) {
                clearInterval(this.intervalItem);
            },
        }
    }


</script>

<style scoped>
    .score{
        position: absolute;
        left: 25%;
        top: 25%;
    }

</style>