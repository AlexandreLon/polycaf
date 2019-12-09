<template>



  <div>
    <div class="div" v-for="el in buttons" >
      <transition v-if="el[0].show === true" name="fade">
        <button v-on:click="check()" class="colored-btn">Click</button>
      </transition>
      <transition v-if="el[1].show === true" name="fade">
        <button v-on:click="check()" class="colored-btn">Click</button>
      </transition>
      <transition v-if="el[2].show === true" name="fade">
        <button v-on:click="check()" class="colored-btn">Click</button>
      </transition>
      <transition v-if="el[3].show === true" name="fade">
        <button v-on:click="check()" class="colored-btn">Click</button>
      </transition>
      <transition v-if="el[4].show === true" name="fade">
        <button v-on:click="check()" class="colored-btn">Click</button>
      </transition>
      <transition v-if="el[5].show === true" name="fade">
        <button v-on:click="check()" class="colored-btn">Click</button>
      </transition>
    </div>


    <div>
      <input v-model="input" type="text" id="input" size="50px">
      <form @submit.prevent="Validate">
        <button class="button">Go for the secret !!</button>
      </form>
    </div>
  </div>
</template>

<script>


  const tab = [];
  tab.length = 48;
  export default {
    name: 'Secret',

    data () {

      return {
        cond1 : false,
        cond2 : false,
        cond3 : false,
        iteration : 0,
        input: '',
        show: true,
        buttons: [[{
          show: false,
          color: null
        },{
          show: false,
          color: null
        },{
          show: false,
          color: null
        },{
          show: false,
          color: null
        },{
          show: false,
          color: null
        },{
          show: false,
          color: null
        }],[{
          show: false,
          color: null
        },{
        show: false,
          color: null
      },{
        show: false,
          color: null
      },{
        show: false,
          color: null
      },{
        show: false,
          color: null
      },{
        show: false,
          color: null
      }],[{
        show: false,
          color: null
      },{
        show: false,
          color: null
      },{
        show: false,
          color: null
      },{
        show: false,
          color: null
      },{
        show: false,
          color: null
      },{
        show: false,
          color: null
      }],[{
          show: false,
          color: null
        },{
          show: false,
          color: null
        },{
          show: false,
          color: null
        },{
          show: false,
          color: null
        },{
          show: false,
          color: null
        },{
          show: false,
          color: null
        }],[{
          show: false,
          color: null
        },{
          show: false,
          color: null
        },{
          show: false,
          color: null
        },{
          show: false,
          color: null
        },{
          show: false,
          color: null
        },{
          show: false,
          color: null
        }],[{
          show: false,
          color: null
        },{
          show: false,
          color: null
        },{
          show: false,
          color: null
        },{
          show: false,
          color: null
        },{
          show: false,
          color: null
        },{
          show: false,
          color: null
        }],[{
          show: false,
          color: null
        },{
          show: false,
          color: null
        },{
          show: false,
          color: null
        },{
          show: false,
          color: null
        },{
          show: false,
          color: null
        },{
          show: false,
          color: null
        }],[{
          show: false,
          color: null
        },{
          show: false,
          color: null
        },{
          show: false,
          color: null
        },{
          show: false,
          color: null
        },{
          show: false,
          color: null
        },{
          show: false,
          color: null
        }],
        ]
      }
    },
    created: function(){
      this.randomToTrue();
    },
    methods: {
      PreValidate(){
        if(this.cond1===true && this.cond2===true && this.cond3===true){
          alert("Le mdp est : ilestsixheuresjesuisfatigue");
        }
      },

      Validate () {
        if (this.input === 'ilestsixheuresjesuisfatigue') {
          this.$router.push('/secretsuccess')
        }
      },
      randomToTrue () {
        this.raz();
        //console.log('la')

        for (var i=0;i<16;i++) {
          let random = Math.ceil(Math.random() * 47)
          //console.log(random)
          //console.log(parseInt(random / 6, 10))
          //console.log(random % 6)
          this.buttons[parseInt(random / 6, 10)][random % 6].show = true;

        }
        var myButtons = document.querySelectorAll(".colored-btn");

        console.log(myButtons.length);
        for(let i =0 ; i< myButtons.length ; i++){
          myButtons[i].style.backgroundColor = this.getRandomColor();

          console.log("i : ",i);
          console.log("ite : ",this.iteration);
          if(i===0 && this.iteration===1){
            myButtons[i].style.backgroundColor = '#c410d0';
            console.log("oui");
            this.cond1=true;
            myButtons[i].classList.add('colorQQchose');
          }
          if(i===0 && this.iteration===2){
            myButtons[i].style.backgroundColor = '#2d63ff';
            console.log("oui");
            this.cond2=true;
          }
          if(i===0 && this.iteration===3){
            myButtons[i].style.backgroundColor = '#de1111';
            console.log("oui");
            this.cond3=true;
          }
        }
        this.iteration++;
        this.PreValidate();
        this.Validate();
        },
      getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  },
      check(e){
        console.log(e.target.classList.contains('colorQQchose'));
      },

      raz(){
        for(var i =0;i<this.buttons.length;i++){
          for(var j = 0;j<this.buttons[i].length;j++){
            this.buttons[i][j].show=false;
          }
        }
      }
      },
  }

</script>

<style scoped>
  #input {
    margin-left: 40%;
    margin-right: 40%;
    vertical-align: middle;
    margin-top: 50px;
  }

  .div {
    width: 100vw;
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
  }

  .button {
    margin-top: 10px;
    vertical-align: middle;
    margin-right: 40%;
    margin-left: 45%;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }
</style>
