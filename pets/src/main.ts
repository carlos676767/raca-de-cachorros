
const imagem = document.querySelector("img") as HTMLImageElement;
const criarImagem = (img: string) => {
  imagem.src = img
}

let receber
const gerarImagensAletaorias = () => {
  fetch("https://api.thecatapi.com/v1/images/search?api_key=live_rkcW5vmQhvnllHkvPB59s2nVrSuajzBGVpSf1bAdgv3lUiLMXOXeDbJU70yjpSLx&limit=50" )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach((elemento: any) => {
        const {url} = elemento;
        receber = url
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

const AlterarEstadoBotaoGostei = () => {
  addEremoveClasses(botaoGostei, "likeAul", "likeBlack");
  setTimeout(() => {
    addEremoveClasses(botaoGostei, "likeBlack", "likeAul");
  }, 1000);
};


botaoGostei.addEventListener("click", () => {
  AlterarEstadoBotaoGostei()
})



const botaoDeslike = document.querySelector(".fa-thumbs-down") as HTMLElement
const alterarEstadoBotaoDeslike = () => {
  addEremoveClasses(botaoDeslike,"iDaCorRed", "iDaCorBlack");
  setTimeout(() => {
    addEremoveClasses(botaoDeslike,"iDaCorBlack","iDaCorRed");
  }, 1000);
};

botaoDeslike.addEventListener("click", () => {
  alterarEstadoBotaoDeslike()
})


const botaoDownload = document.querySelector(".fa-download") as HTMLElement

const donwloadImagem = () => {
  const a = document.createElement("a") as HTMLAnchorElement
  a.href = 
  a.download = imagem.src
  a.type = "application.jpg"
  a.click()
}

botaoDownload.addEventListener("click", () => {
  donwloadImagem()
})