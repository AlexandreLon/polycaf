<template>
  <div id="content-detail">
    <div id="map-container">
      <h2>Ma caf la plus proche</h2>
      <div>
        <iframe width="400" height="400" src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=caf&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
      </div>
    </div>
    <div id="text">
      <h2>Aide personnalisée au logement</h2>
      <p>
        L'aide personnalisée au logement (APL) est une aide financière destinée à réduire le montant de votre loyer, mensualité d'emprunt ou redevance (si vous résidez en foyer). Elle est versée en raison de la situation de votre logement et ce, quelle que soit votre situation familiale : célibataire, marié, avec ou sans personne à charge. Les conditions d'attribution diffèrent selon que vous êtes en location, que vous accédez à la propriété ou que vous résidez en foyer.
        <br /><br />
        Les aides au logement (AL) ou aides personnelles au logement (APL au sens large) sont des prestations sociales françaises qui visent à permettre aux ménages à faible revenu d’accéder à un logement ou de s’y maintenir, qu'ils soient locataires ou accédants à la propriété. Leur montant dépend du revenu, de la situation de famille et du loyer ou de la mensualité de remboursement d'emprunt du bénéficiaire, ainsi que de l'âge (personne âgée), de la santé (invalidité), du type de logement (foyer, appartement, chambre, meublé ou non, etc.). Il existe trois types d'aides au logement selon le type de logement et la situation familiale : aide personnalisée au logement (APL au sens restreint), allocation de logement familiale (ALF) et allocation de logement sociale (ALS).
        <br /><br />
        D'après l'Inspection générale des affaires sociales, les APL permettent de diminuer le taux d'effort des allocataires dans leur logement de 35,8 % à 19,5 %, ce qui fait des APL l'un des principaux instruments de lutte contre la pauvreté en France.
        <br /><br />
        Le budget alloué aux aides aux logements est de 13,6 milliards d’euros en 2019 en France, pris en charge par le ministère du Logement.
      </p>
      <a href="https://www.service-public.fr/particuliers/vosdroits/F12006" target="_blank" class="button-blue">En savoir plus</a>
    </div>
  </div>
</template>

<script>
  export default {
      name: "CategoryDetailsApl"
  }
</script>

<style scoped>
  #content-detail {
    display: flex;
    flex-wrap: nowrap;
  }
  p,h2{
    color:#ededed;
  }
  #map {
    width: 50vw;
    float:left;
  }
  #text{
    margin-left: 10px;
    text-align: justify;
    font-size: 11pt;
  }
</style>
