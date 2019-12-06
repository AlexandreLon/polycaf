<template>
  <div id="content-detail">
    <div id="map-container">
      <h2>Ma caf la plus proche</h2>
      <div>
        <iframe width="400" height="400" src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=caf&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
      </div>
    </div>
    <div id="text">
      <h2>Caisse d'allocation familiale</h2>
      <p>
        La Caisse d'allocations familiales (CAF) constitue la branche famille de la Sécurité sociale. C'est un organisme local qui appartient à la Caisse nationale des allocations familiales. Il est présent dans chaque département et sur tout le territoire français. Aujourd'hui, la Caisse d'allocations familiales propose un ensemble de prestations disponibles à chaque étape de la vie.
        <br /><br />
        Aides au le logement :<br />
        La Caf offre de nombreuses aides qui permettent aux bénéficiaires de mieux se loger :- l'aide personnalisée au logement (APL)<br />
        - l'allocation de logement sociale (ALS)<br />
        - l'allocation de logement familiale (ALF)<br />
        <br />
        Aides naissance :<br />
        La Caisse d'allocations familiales propose un ensemble de prestations disponibles à chaque étape de la vie. Ainsi, à la naissance ou à l'adoption d'un enfant, la CAF verse des prestations dites d'accueil du jeune enfant :<br />
        - prime de naissance (versée au septième mois de grossesse)<br />
        - prime d'adoption<br />
        <br />
        Aides financières et aides sociales<br />
        Aujourd'hui, la Caf distribue des allocations qui permettent à chacun de disposer d'un revenu régulier notamment lors de moments difficiles de la vie (handicap, chômage, temps partiel subi...).<br />
        - l'allocation aux adultes handicapés ;<br />
        - le RSA (revenu de solidarité active)- la prime d'activité depuis janvier 2016. Cette aide fusionne le RSA d'activité et la Prime pour l'emploi). Cette aide est également distribuée par la MSA pour les personnes relevant du régime social agricole. Elle apporte un vrai complément de revenus aux personnes qui travaillent pour de faibles revenus, par exemple un mi-temps payé au Smic.<br />
      </p>
      <a href="http://www.caf.fr/" target="_blank" class="button-blue">En savoir plus</a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "CategoryDetailsCaf"
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
