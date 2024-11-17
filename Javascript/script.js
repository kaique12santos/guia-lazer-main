function toggleFAQ(element) {
    const allAnswers = document.querySelectorAll('.faq-answer');
    const allIcons = document.querySelectorAll('.icon');
    const answer = element.nextElementSibling;
    const icon = element.querySelector('.icon');

  
    allAnswers.forEach((ans, idx) => {
        if (ans !== answer) {
            ans.style.display = 'none';
            allIcons[idx].textContent = '+';  
        }
    });


    if (answer.style.display === "block") {
        answer.style.display = "none";
        icon.textContent = "+";
    } else {
        answer.style.display = "block";
        icon.textContent = "-";
    }
}
const emailExistente = ["teste@exemplo.com", "email@dominio.com"]; // Simulação de emails cadastrados

function enviarFormulario(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obter os elementos do formulário
    const nome = document.getElementById("txt_nome").value.trim();
    const email = document.getElementById("txt_email").value.trim();
    const telefone = document.getElementById("txt_tel").value.trim();
    const nomeComercio = document.getElementById("txt_nomeComercio").value.trim();
    const tipoComercio = document.getElementById("sel_ling").value;
    const endereco = document.getElementById("txt_EnderecoComercio").value.trim();
    const numero = document.getElementById("txt_enderecoNumero").value.trim();
    const bairro = document.getElementById("txt_Bairro").value.trim();
    const cep = document.getElementById("txt_CEP").value.trim();
    const descricao = document.querySelector("textarea[name='descricaoComercio']").value.trim();
    const aceiteTermos = document.getElementById("aceite_termos").checked;

    // Verificação de campos obrigatórios
    if (!nome) {
        alert("Por favor, preencha o campo Nome.");
        return;
    }

    if (!email) {
        alert("Por favor, preencha o campo E-mail.");
        return;
    }

    if (!telefone) {
        alert("Por favor, preencha o campo Telefone.");
        return;
    }

    if (!nomeComercio) {
        alert("Por favor, preencha o Nome do Comércio.");
        return;
    }

    if (tipoComercio === "selecione") {
        alert("Por favor, selecione o Tipo de Comércio.");
        return;
    }

    if (!endereco) {
        alert("Por favor, preencha o Endereço.");
        return;
    }

    if (!numero) {
        alert("Por favor, preencha o Número do Endereço.");
        return;
    }

    if (!bairro) {
        alert("Por favor, preencha o Bairro.");
        return;
    }

    if (!cep) {
        alert("Por favor, preencha o CEP.");
        return;
    }

    if (!descricao) {
        alert("Por favor, preencha a Descrição do Comércio.");
        return;
    }

    if (!aceiteTermos) {
        alert("Você deve aceitar os termos para continuar.");
        return;
    }

    // Verificação de email já existente
    if (emailExistente.includes(email)) {
        alert("E-mail já cadastrado.");
        return;
    }

    // Mensagem de sucesso
    alert("Formulário enviado com sucesso!");
    document.getElementById("formularioCadastro").reset(); // Reseta o formulário
}

// Máscara de telefone
function mascaraTelefone(input) {
    input.value = input.value
        .replace(/\D/g, "") // Remove caracteres não numéricos
        .replace(/(\d{2})(\d{5})(\d)/, "($1) $2-$3") // Formata como (00) 00000-0000
        .replace(/(\d{4,5})-(\d{4})\d+?$/, "$1-$2"); // Ajusta para tamanhos corretos
}

// Máscara de CEP
function mascaraCEP(input) {
    input.value = input.value
        .replace(/\D/g, "") // Remove caracteres não numéricos
        .replace(/^(\d{5})(\d)/, "$1-$2") // Formata como 00000-000
        .replace(/(-\d{3})\d+?$/, "$1"); // Ajusta para tamanho correto
}


document.addEventListener("DOMContentLoaded", function () {
    // Seleciona o botão de menu
    const menuToggle = document.getElementById("menuToggle");

    // Seleciona os elementos a serem exibidos ou ocultados
    const headerButtons = document.querySelector(".header-buttons");
    const boxSearch = document.querySelector(".box-search");
    const header = document.querySelector("header"); // Seleciona o header para a classe compacta

    // Seleciona o h1 e o h2
    const h1 = document.querySelector(".logo h1");
    const h2 = document.querySelector(".titulo-mobile");

    // Adiciona o evento de clique ao botão de menu
    menuToggle.addEventListener("click", function () {
        // Alterna a classe "show" nos elementos
        headerButtons.classList.toggle("show");
        boxSearch.classList.toggle("show");

        // Alterna a classe "compact-header" no header
        header.classList.toggle("compact-header");

        // Verifica se a classe compact-header está ativa
        if (header.classList.contains("compact-header")) {
            // Substitui o texto do h1 pelo texto do h2
            h1.textContent = h2.textContent;
            // Ajusta o tamanho do h1
            h1.style.fontSize = "1em";
        } else {
            // Restaura o texto e o tamanho do h1 ao estado original
            h1.textContent = "Guia Lazer SP";
            h1.style.fontSize = ""; // Remove estilo inline
        }
    });
}); 
document.addEventListener("DOMContentLoaded", () => {
    const toggleSearchButton = document.getElementById("toggle-search");
    const searchBox = document.querySelector(".box-search");

    toggleSearchButton.addEventListener("click", () => {
        searchBox.classList.toggle("show"); // Alterna a classe `show` para exibir ou ocultar
    });
});
const video = document.getElementById("videoIntro");
        
        // Ajusta a taxa de reprodução (1.0 é normal, valores menores tornam o vídeo mais lento)
        video.playbackRate = 0.5;
       