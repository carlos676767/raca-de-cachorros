

const criarImagem = (img: string) => {
  const imagem = document.querySelector("img") as HTMLImageElement;
  imagem.src = img
}

const gerarImagensAletaorias = () => {
  fetch("https://api.thecatapi.com/v1/images/search?api_key=live_rkcW5vmQhvnllHkvPB59s2nVrSuajzBGVpSf1bAdgv3lUiLMXOXeDbJU70yjpSLx&limit=50" )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach((elemento: any) => {
        const {url} = elemento;
        criarImagem(url);
      });
    });
};

const botaoLike = document.querySelector(".fa-heart") as HTMLElement
const addEremoveClasses = (botao: HTMLElement,classe1: string, classe2: string) => {
  botao.classList.add(classe1);
  botao.classList.remove(classe2);
}

const botaoDaCorCurtir = () => {
  addEremoveClasses(botaoLike,"iDaCorRed", "iDaCorBlack");
  setTimeout(() => {
    addEremoveClasses(botaoLike,"iDaCorBlack","iDaCorRed");
  }, 1000);
}

gerarImagensAletaorias();
botaoLike.addEventListener("click", () => {
  gerarImagensAletaorias();
  botaoDaCorCurtir();
})

const botaoGostei = document.querySelector(".fa-thumbs-up") as HTMLElement
botaoGostei.addEventListener("click", () => {
  addEremoveClasses(botaoGostei, "likeAul", "likeBlack")
  setTimeout(() => {
    addEremoveClasses(botaoGostei,"likeBlack", "likeAul")
  }, 1000);
})

