function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function afficherAlea() {
  const quoten = getRandomNumber(0, QuoteList.length - 1);
  const citation = QuoteList[quoten];

  const container = document.getElementById('citation-container');
  container.innerHTML = '';

  const citationElement = document.createElement('p');
  citationElement.textContent = citation.QuoteC;

  const auteurElement = document.createElement('p');
  auteurElement.textContent = "- " + citation.Author;

  container.appendChild(citationElement);
  container.appendChild(auteurElement);
}

var listFav = [];

function ajouterAuxFavoris() {
  const container = document.getElementById('citation-container');
  const citation = container.firstChild.textContent;
  const auteur = container.lastChild.textContent.substring(2);

  const citationFav = {
      QuoteC: citation,
      Author: auteur,
      favoris: false
  };

  listFav.push(citationFav);

  // Mise à jour de la valeur 'favoris' de l'élément affiché
  const quoten = getRandomNumber(0, QuoteList.length - 1);
  QuoteList[quoten].favoris = true;

  afficherFav(); // Mise à jour de l'affichage de la liste des citations favorites
}

function afficherFav() {
  const container = document.getElementById('les-favs');
  container.innerHTML = '';

  for (var i = 0; i < listFav.length; i++) {
      const citationElement = document.createElement('p');
      citationElement.textContent = listFav[i].QuoteC;

      const auteurElement = document.createElement('p');
      auteurElement.textContent = "- " + listFav[i].Author;

      container.appendChild(citationElement);
      container.appendChild(auteurElement);
  }
}
