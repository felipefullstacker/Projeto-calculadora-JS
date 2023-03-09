const tela = document.querySelector(".tela");
const botoes = document.querySelectorAll(".btn");

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        const botaoapertado = botao.textContent;

        if(botao.id === "c") {
            tela.textContent = "0";
            return;
        }

        if(botao.id === "apagar"){
            if(tela.textContent.length === 1 || tela.textContent === "Erro"){
                tela.textContent = "0";
            }else{
                tela.textContent = tela.textContent.slice(0, -1);
            }
            return;
        }

        if(botao.id === "igual"){
            try{
                tela.textContent = eval(tela.textContent);
            }catch {
                tela.textContent = "Erro";
            }
            return;
        }

        
        if(tela.textContent === "0" || tela.textContent === "Erro" ) {
            tela.textContent = botaoapertado;
        }else {
            tela.textContent += botaoapertado
        }
    })
})
