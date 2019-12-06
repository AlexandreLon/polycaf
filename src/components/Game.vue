<template>
    <div>
        <img src="../assets/bill.png" alt="" id="bills" v-show="false">
        <img src="../assets/stackelement.png" alt="" id="paper" v-show="false">
        <audio v-show="false" id="my_audio" controls preload="none">
            <source src="../assets/jump.mp3" type="audio/mp3">
        </audio>
        <canvas id="myCanvas" width="1200" height="600"></canvas>
    </div>
</template>

<script>
    import Game from '../models/game/Game'
    import Player from "../models/game/Player";

    export default {
        name: "Game.vue",
        data() {
            return {
                ctx: null,
                game: null,
                canvas: null,
                player: null,
                interval: true,
                intervalItem: null,
                score: 0,
                imageBill: null,
                imagePaper: null,
                sound: null
            }
        },
        methods: {
            play_audio(task) {
                document.getElementById("my_audio").play();

            },
            drawObstacle(obstacle) {
                //this.ctx.fillRect(obstacle.x1,obstacle.y1,obstacle.x2 - obstacle.x1,obstacle.y2 - obstacle.y1)
                for (let i = 0; i < ((obstacle.y2 - obstacle.y1) / 17.5) - 1; i++) {
                    this.ctx.drawImage(this.imagePaper, obstacle.x1, obstacle.y1 + i * 17.5, obstacle.x2 - obstacle.x1, 17)

                }

            },
            drawLine(line) {
                this.drawObstacle(line.obs1)
                this.drawObstacle(line.obs2)
            },
            drawGame(game) {
                this.ctx.fillStyle = "white";
                this.ctx.fillRect(0, 0, game.canvasWidth, game.canvasHeight);
                this.ctx.fillStyle = "blue";
                this.ctx.fillText(this.score, this.canvas.width / 2, this.canvas.height / 2);
                this.ctx.fillStyle = "black";


                const that = this;

                game.lines.forEach(line => {
                    that.drawLine(line);
                })


            },
            drawPlayer(player) {
                this.ctx.fillStyle = "red";

                this.ctx.drawImage(this.imageBill, player.x1, player.y1, player.x2 - player.x1, player.y2 - player.y1)


                this.ctx.fillStyle = "black";
            },
            update() {
                this.game.shift1();
                this.game.createAndRemove()
                this.drawGame(this.game);
                this.drawPlayer(this.player)
                this.player.fall()
                const that = this;
                this.game.lines.forEach(line => {
                    if (line.hit(that.player)) {
                        that.interval = false;
                        return;
                    }
                    if (line.passed(this.player)) {
                        that.score++;
                        that.play_audio('play');
                        this.sound.play();
                    }

                });


            },
            listenerPlayer() {
                const that = this;
                document.addEventListener('click', function (event) {
                    if (that.interval) {
                        for (let i = 0; i < 40; i++) {
                            that.player.jump();
                            that.drawPlayer(that.player)

                        }
                    }


                }, false);
                document.addEventListener('keypress', function (event) {
                    if (that.interval) {

                        for (let i = 0; i < 40; i++) {
                            that.player.jump();
                            that.drawPlayer(that.player)

                        }
                    }


                }, false);
            },
        },
        mounted() {
            this.canvas = document.getElementById("myCanvas");
            this.ctx = this.canvas.getContext('2d');
            this.game = new Game(this.canvas.width, this.canvas.height);
            this.player = new Player(100, this.canvas.height / 2, 150, this.canvas.height / 2 + 50);
            this.listenerPlayer();
            this.ctx.font = "30px Arial";
            this.ctx.fillText(this.score, this.canvas.width / 2, this.canvas.height / 2);
            this.imageBill = document.getElementById("bills");
            this.imagePaper = document.getElementById("paper");

            this.intervalItem = setInterval(this.update, 17);

            this.sound = new Audio("../assets/jump.mp3"); // buffers automatically when created
            // snd.play();
            //
            // this.sound = document.createElement("audio");
            // this.sound.src = "../assets/jump.wav";
            // this.sound.setAttribute("preload", "auto");
            // this.sound.setAttribute("controls", "none");
            // document.body.appendChild(this.sound);
            // this.sound.style.display = "none";

        },
        watch: {
            interval: function (val) {
                clearInterval(this.intervalItem);
            },
        }
    }


</script>

<style scoped>
    .score {
        position: absolute;
        left: 25%;
        top: 25%;
    }

</style>