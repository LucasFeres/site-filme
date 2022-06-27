let k = 3;
const mostrarFilmes = (data) => {
  let j = k;
  let dadosFilmes = JSON.parse(data.target.response);

  localStorage.setItem("db_filmes", data.target.response);

  let dadosHTML = "";
  for (let i = 0; i < j; i++) {
    let filme = dadosFilmes.results[i];
    dadosHTML += `            <div class="card col-12  col-md-6 col-lg-4">
      <img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" class="card-img-top" alt="FilmeXPTO">
      <div class="card-body">
        <h5 class="card-title">${filme.title}</h5>
        <p class="card-text">${filme.overview}</p>
        <a href="detalhes.html?id=${filme.id}" class="btn btn-info">Detalhes</a>
      </div>
    </div>`;
  }
  document.getElementById("listaFilmes").innerHTML = dadosHTML;
};

//alerta quando a requisição falha
const mostrarErro = (data) => {
  alert("Erro na requisição");
};

//faz a requisição dos filmes
const init = () => {
  console.log("init");
  let xhr = new XMLHttpRequest();
  let url =
    "https://api.themoviedb.org/3/movie/popular?api_key=8ee9a08b637cc8748eafb3d37ff45c84&language=PT-BR";
  xhr.onload = mostrarFilmes;
  xhr.onerror = mostrarErro;
  xhr.open("GET", url, true);
  xhr.send();
};
document.body.onload = init;

function maisFilmes() {
  console.log("ok");
  k = k + 3;
  init();
}

function menosFilmes() {
  console.log("ok");
  if (k > 3) {
    k = k - 3;
    init();
  }
}

function Esconder() {
  console.log("ok");
  k = 3;
  init();
}

document.getElementById("btMaisFilmes").onclick = maisFilmes;
document.getElementById("btMenosFilmes").onclick = menosFilmes;
document.getElementById("btEsconder").onclick = Esconder;

