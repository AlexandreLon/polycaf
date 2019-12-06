<template>
  <div class="form-group" v-if="!isSubmitted">
    <div v-if="!isSubmitted">
      <label for="email">Mail</label>
      <input type="text" id="email" class="form-control" v-model="userData.email" />
      <br />
      <br />

      <label for="nom">Nom</label>
      <input type="text" id="nom" class="form-control" v-model="userData.nom" />
      <br />
      <br />

      <label for="prenom">Prénom</label>
      <input type="text" id="prenom" class="form-control" v-model="userData.prenom" />
      <br />
      <br />

      <label for="homme">
        <br />Homme
        <input type="radio" id="homme" value="homme" v-model="radioBoxOption" />
      </label>
      <label for="femme">
        <br />Femme
        <input type="radio" id="femme" value="femme" v-model="radioBoxOption" />
      </label>

      <br />
      <br />
      <br />

      <label for="age">Age</label>
      <input type="number" min="15" max="99" id="age" class="form-control" v-model="userData.age" />
      <br />
      <br />
      <br />

      <label for="coef">Coefficient Familiale année 2018</label>
      <input type="number" id="coef" class="form-control" v-model="userData.coef" />
      <br />
      <label for="cafBefore">
        <br />
        <input type="checkbox" id="cafBefore" value="cafBefore" v-model="userData.cafBefore" /> J'ai déjà perçu des droits via la CAF
      </label>
      <br />
      <br />
      <br />
      <br />
      <label for="prof">Je suis ...</label>
      <select id="prof" class="form-control" v-model="userData.profession">
        <option v-for="prof in profs">{{ prof }}</option>
      </select>

      <button class="btn btn-primary" @click.prevent="submitted">Lancer la simulation</button>
    </div>

    <h2 style="color: white"></h2>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Formulaire",
  data() {
    return {
      userData: {
        email: "",
        nom: "",
        prenom: "",
        age: "",
        coef: "",
        cafBefore: "",
        profession: ""
      },
      profs: ["Étudiant", "Lycéen", "Salarié", "Au chômage", "Retraité"],
      radioBoxOption: "Homme",
      value: -1,
      isSubmitted: false
    };
  },
  methods: {
    submitted() {
      if (
        this.userData.email != "" &&
        this.userData.nom != "" &&
        this.userData.prenom != "" &&
        this.userData.age != "" &&
        this.userData.coef != ""
      ) {
        this.isSubmitted = true;
        this.value = Math.floor(Math.random() * (1100 - 250 + 1)) + 1100;
        document
          .getElementsByTagName("h2")[0]
          .innerHTML("Aides possibles : " + this.value);
      }
      console.log(this.userData);
    }
  }
};
</script>

<style scoped>
.form-group {
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  margin-top: 40px;
  color: white;
}
p {
  margin-top: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
h2 {
  color: #ededed;
  text-align: center;
}
input[type="text"],
input[type="number"],
select {
  box-sizing: border-box;
  font-size: 18px;
  width: 100%;
  border-radius: 6px;
  border: 2px solid transparent;
  color: #888b9a;
  padding: 10px 24px;
  margin: 20px 0;
  resize: vertical;
  outline: 0;
}
.flex-right {
  display: flex;
  justify-content: flex-end;
}
.btn-primary {
  display: inline-block;
  text-align: center;
  margin: 5px auto;
  border: 0;
  background-color: greenyellow;
  color: gray;
  font-size: 15pt;
  padding: 15px 30px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
}
</style>