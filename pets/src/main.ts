
const imagem = document.getElementById("img") as HTMLImageElement;
const criarImagem = (img: string) => {
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
  a.href = imagem.src
  a.download = imagem.src
  a.type = "application.jpg"
  a.click()
}

botaoDownload.addEventListener("click", () => {
  donwloadImagem()
})


const filhaDiv = document.querySelector(".exibir") as HTMLDivElement

const mostrarDiv = () => {
  filhaDiv.style.display = "block"
}

const obterImagem = (gif: string) => {
  const iframe = document.createElement("img") as HTMLImageElement;
  iframe.src = gif;
  iframe.id = "imagem";
  filhaDiv.appendChild(iframe);
}




const ocultarDiv = () => {
  const divImagens = document.querySelector(".imagens") as HTMLDivElement;
  divImagens.style.display = "none";
}

const obterGifsAnimais = () => {
  fetch("https://api.giphy.com/v1/gifs/search?q=dogs&api_key=hXMCvAWd5fNhch64um0QEhDPUQ7xkK9R&limitI&limit=50&tag=animal")
  .then(response => response.json())
  .then(data => {
    data.data.forEach((elemento: any) => {
      obterImagem(elemento.images.original.url)
      ocultarDiv();
    });
  })
}




const video = document.querySelector(".fa-video") as HTMLElement;
const esconderImagem = () => {
  imagem.style.display = "none";
};

video.addEventListener("click", () => {
  esconderImagem();
  obterGifsAnimais();
  mostrarDiv();
});


const select = document.querySelector("select") as HTMLSelectElement

const criarOption = (dados: string) => {
  const option = document.createElement("option") as HTMLOptionElement
  option.innerHTML = dados
  select.appendChild(option)
  console.log(select);
}

const obterRacasPets = () => {
  fetch("https://api.thedogapi.com/v1/breeds")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((especies: any) => {
        const { name } = especies;
        criarOption(name)
      });
    })
    .then((erro) => {
      console.log(erro);
    });
};

obterRacasPets();



const botaoDarkMode = document.getElementById("dark-mode-toggle") as HTMLInputElement;
botaoDarkMode.addEventListener("change", () => {
  if (botaoDarkMode.checked) {
    addEremoveClasses(document.body, "dark-mode", "white-mode");
    localStorage.setItem("darkmode", "dark-mode");
  } else {
    localStorage.setItem("darkmode", "white-mode");
    addEremoveClasses(document.body, "white-mode", "dark-mode");
  }
});

const valorCheckado = (valor: boolean) => {
  botaoDarkMode.checked = valor;
};

const recuperarValorDarkMode = () => {
  const recuperarChaveMode = localStorage.getItem("darkmode");
  if (recuperarChaveMode === "dark-mode") {
    addEremoveClasses(document.body, "dark-mode", "white-mode");
    valorCheckado(true);
  } else {
    addEremoveClasses(document.body, "white-mode", "dark-mode");
    valorCheckado(false);
  }
};

recuperarValorDarkMode();

