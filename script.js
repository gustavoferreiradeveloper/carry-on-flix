var listaSupernatural = [
  "",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/0/0f/Supernatural-Primeira_Temporada_%28Blu-ray%29.jpg/230px-Supernatural-Primeira_Temporada_%28Blu-ray%29.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/0/0e/Supernatural-Segunda_Temporada_%28Blu-ray%29.jpg/230px-Supernatural-Segunda_Temporada_%28Blu-ray%29.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/e/e1/Supernatural_Season_3_poster.jpg/230px-Supernatural_Season_3_poster.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/2/2c/Supernatural-Quarta_Temporada_%28Blu-ray%29.jpg/230px-Supernatural-Quarta_Temporada_%28Blu-ray%29.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/e/e6/Supernatural-Quinta_Temporada_%28Blu-ray%29.jpg/230px-Supernatural-Quinta_Temporada_%28Blu-ray%29.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/4/46/Supernatural_%28sexta_temporada%29.jpg/250px-Supernatural_%28sexta_temporada%29.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/4/43/Supernatural-Temporada7_%28Blu-ray%29.jpg/250px-Supernatural-Temporada7_%28Blu-ray%29.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/6/6b/Supernatural_temporada_8_poster.jpg/250px-Supernatural_temporada_8_poster.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/7/75/Supernatural_temporada_9_poster.jpg/250px-Supernatural_temporada_9_poster.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/d/d3/Supernatural_temporada_10_Poster.png/250px-Supernatural_temporada_10_Poster.png",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/d/df/Supernatural_temporada_11_poster.jpg/230px-Supernatural_temporada_11_poster.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/5/58/Supernatural_%28temporada_12%29_-_Poster.jpg/250px-Supernatural_%28temporada_12%29_-_Poster.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/9/9c/Supernatural_Temporada_13_Poster.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/c/c4/Supernatural_temporada_14_poster.jpg/250px-Supernatural_temporada_14_poster.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/b/bb/Supernatural_temporada_15_poster.jpg/250px-Supernatural_temporada_15_poster.jpg",
];

function buscaTemporada() {
  var temporadaFavorita = parseInt(document.getElementById("temporada").value);
  var elementoTemporadaFavorita =
    "<img src=" + listaSupernatural[temporadaFavorita] + ">";

  var elementoListaTempSpn = document.getElementById("listaTempSpn");

  var elementoRespostaH2 =
    "Número de temporada inválido, por favor leia atentamente as instruções!";

  var elementoResposta = document.getElementById("res");

  if (temporadaFavorita > 0 && temporadaFavorita < 16) {
    elementoListaTempSpn.innerHTML = elementoTemporadaFavorita;
    elementoResposta.innerHTML = "";
  } else {
    elementoListaTempSpn.innerHTML = "";
    elementoResposta.innerHTML = elementoRespostaH2;
  }
}
