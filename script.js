let secaoAtiva = "home";


function restaurarHome() {
  if (secaoAtiva !== "home") {
    esconderConteudo();
    const conteudoInicial = document.createElement("div");
    conteudoInicial.classList.add("main-content");
    conteudoInicial.innerHTML = `
            <h2>O Futuro é Verde <br> Junte-se a Nós</h2>
            <p>Pequenas ações, grandes mudanças. Descubra como você pode ajudar.</p>
            <div class="buttons">
                <button class="btn">Faça Parte do Movimento</button>
            </div>
        `;
    document.querySelector(".content").appendChild(conteudoInicial);
    secaoAtiva = "home";
  }
}


function trocarConteudoSobreNos() {
  if (secaoAtiva !== "sobreNos") {
    esconderConteudo();
    const novoConteudo = document.createElement("div");
    novoConteudo.classList.add("main-content");
    novoConteudo.innerHTML = `
            <h2>Quem Somos?</h2>
            <p>Somos uma organização dedicada à preservação do meio ambiente e à promoção de práticas sustentáveis. Acreditamos que pequenas ações podem gerar grandes mudanças e estamos aqui para inspirar e capacitar pessoas e empresas a adotarem soluções conscientes, criando um impacto positivo para um futuro mais verde.</p>
            <div class="buttons">
                <button class="btn">Faça Parte do Movimento</button>
            </div>
        `;
    document.querySelector(".content").appendChild(novoConteudo);
    secaoAtiva = "sobreNos";
    
  }
  aplicarEventoCliqueBotao();
}


function trocarConteudoAcoesPraticas() {
  if (secaoAtiva !== "acoesPraticas") {
    esconderConteudo();
    const novoConteudo = document.createElement("div");
    novoConteudo.classList.add("main-content");
    novoConteudo.innerHTML = `
            <h2>Ações Práticas</h2>
            <p>Descubra como aplicar ações sustentáveis no seu dia a dia.</p>
            <div class="cards-container">
                <h3>Reduza Seu Consumo de Plástico 🌿</h3>
                <h3>Plante Árvores com um Clique 🌱</h3>            
                <h3>Calcule Sua Pegada de Carbono 🔄</h3>             
                <h3>Participe de Desafios Semanais 🚀</h3>
                <div class="buttons">
                    <button class="btn">Faça Parte do Movimento</button>
                </div>
            </div>
        `;
    document.querySelector(".content").appendChild(novoConteudo);
    secaoAtiva = "acoesPraticas";
  }
}


function exibirFormularioInscricao() {
  if (secaoAtiva !== "inscricao") {
    esconderConteudo();
    const formularioInscricao = document.createElement("div");
    formularioInscricao.classList.add("main-content");
    formularioInscricao.innerHTML = `
            <h2>Receba dicas sustentáveis e desafios ecológicos no seu e-mail!</h2>
            <p>Inscreva-se agora e faça parte da mudança.</p>
            <input type="email" class="email-input" placeholder="Digite seu e-mail" required>
            <button class="cta-button">Quero Participar</button>
            <div class="bonus">🎁 Bônus: Cupom de desconto para marcas sustentáveis ao se inscrever!</div>
        `;
    document.querySelector(".content").appendChild(formularioInscricao);
    secaoAtiva = "inscricao";
  }
}


function esconderConteudo() {
  const conteudoAtual = document.querySelector(".content .main-content");
  if (conteudoAtual) {
    conteudoAtual.remove();
  }
}


document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector('a[href="home"]')
    .addEventListener("click", function (event) {
      event.preventDefault();
      restaurarHome();
    });

  document
    .querySelector('a[href="sobre nos"]')
    .addEventListener("click", function (event) {
      event.preventDefault();
      trocarConteudoSobreNos();
    });

  document
    .querySelector('a[href="ações praticas"]')
    .addEventListener("click", function (event) {
      event.preventDefault();
      trocarConteudoAcoesPraticas();
    });

  document
    .querySelector('a[href="inscrever-se"]')
    .addEventListener("click", function (event) {
      event.preventDefault();
      exibirFormularioInscricao();
    });
});

document.addEventListener("DOMContentLoaded", function () {
  
  document.body.addEventListener("click", function (event) {
    
    if (event.target && event.target.matches("button.btn") && event.target.innerText === "Faça Parte do Movimento") {
      exibirFormularioInscricao();  
    }
  });


  document
    .querySelector('a[href="home"]')
    .addEventListener("click", function (event) {
      event.preventDefault();
      restaurarHome();
    });

  document
    .querySelector('a[href="sobre nos"]')
    .addEventListener("click", function (event) {
      event.preventDefault();
      trocarConteudoSobreNos();
    });

  document
    .querySelector('a[href="ações praticas"]')
    .addEventListener("click", function (event) {
      event.preventDefault();
      trocarConteudoAcoesPraticas();
    });

  document
    .querySelector('a[href="inscrever-se"]')
    .addEventListener("click", function (event) {
      event.preventDefault();
      exibirFormularioInscricao();
    });
});