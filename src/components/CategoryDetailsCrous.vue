<template>
  <div id="contentdetail">
    <div id="text">
      <h2> Un peu d'histoire </h2>
      <p>
        C’est la loi du 16 avril 1955 qui porte création du Centre national des œuvres universitaires et scolaires (Cnous) et des Centres régionaux (Crous) ayant le statut juridique d’établissements publics dotés de la personnalité civile et financière. Cette loi est l’aboutissement d’une évolution amorcée au début du 20ème siècle.<br>
        <br>
        1919 : inscription au budget du ministère de l’éducation nationale, de crédits destinés aux associations étudiantes pour les œuvres sociales qu’elles se proposent de gérer<br><br>

        Début des années 30 : prise en gestion de ces crédits par un organisme public, la Commission des Recteurs, pour la création de résidences universitaires
        <br><br>
        1936 : création par le ministre de l’éducation nationale, Jean Zay, d’un organisme permanent : le Comité supérieur des œuvres en faveur des étudiants
        <br><br>
        Années 40 : développement important des activités du Comité supérieur des œuvres (création d’un centre d’informations sociales, de l’Office du tourisme universitaire, de l’aide financière aux restaurants universitaires, organisation de la médecine préventive universitaire, accueil des étudiants étrangers…)
        <br><br>
        8 août 1947 : un arrêté dote ce Comité d’un statut qui lui donne une certaine autonomie fonctionnelle, et création des Centres régionaux dans chaque académie sous le régime d’association de la loi 1901
        <br><br>
        16 avril 1955 : loi portant création du réseau des Crous et du Cnous. C’est l’aboutissement de plusieurs projets élaborés par les organisations étudiantes et l’administration et destinés à rendre plus efficace l’action des Crous. Les services de la vie étudiante passent ainsi d’une forme d’aide sociale assurée par des associations étudiantes, vers une structure stable permettant d’assurer la pérennité du dispositif et de sécuriser les investissements publics.
        <br><br>
        26 novembre 1965 : création par décret du Crous de Nice (et du Crous de Limoges), sous la présidence de Charles de Gaulle. Consulter la parution au journal officiel du 2 décembre 1965.
        <br><br>
        5 mars 1987 : décret modifiant la loi de 1955 et réactualisant les missions du Cnous et des Crous, la composition des conseils d’administration et les modalités d’élection des étudiants à ces conseils.
        <br><br>
        29 juillet 2016 : décret relatif aux missions et à l’organisation des œuvres universitaires
      </p>
      <div id ="map"></div>

    </div>
  </div>
</template>

<script>
  export default {
      name: "CategoryDetailsCrous"
  }
</script>

<style scoped>

#contentdetail {
  padding: 0 3%;
}
 p,h2{
   color:#ededed;
 }
 #map {
   width: 50vw;
   float:left;
 }
 #text{
   text-align: justify;
  float:left;
  font-size: 11pt;
 }

</style>
