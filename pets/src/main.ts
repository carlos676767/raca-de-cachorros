

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
        const {url} = elemento
        criarImagem(url)
      });
    });
};

const botaoLike = document.querySelector(".fa-heart") as HTMLButtonElement

const botaoDaCorCurtir = () => {
  botaoLike.classList.add("iDaCorRed")
  botaoLike.classList.remove("iDaCorBlack")
  setTimeout(() => {
    botaoLike.classList.add("iDaCorBlack")
    botaoLike.classList.remove("iDaCorRed")
  }, 1000);
}

gerarImagensAletaorias()

botaoLike.addEventListener("click", () => {
  gerarImagensAletaorias()
  botaoDaCorCurtir()
})

