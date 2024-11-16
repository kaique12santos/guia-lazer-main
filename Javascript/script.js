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
function enviarFormulario(event) {
    event.preventDefault(); 

    const formulario = document.getElementById('formularioCadastro');

    if (formulario.checkValidity()) {
        alert("Formulário enviado com sucesso!");
        window.location.href = "paginaPrincipal.html"; 
    } else {
        alert("Por favor, preencha todos os campos obrigatórios.");
    }
}
 
 function mascaraTelefone(telefone) {
    telefone.value = telefone.value
        .replace(/\D/g, '') 
        .replace(/^(\d{2})(\d)/, '($1) $2') 
        .replace(/(\d{5})(\d)/, '$1-$2'); 
        let num = telefone.value.replace(/\D/g, '');
         
         if (num.length <= 10) {
            // Formato para números com DDD e sem 9
            telefone.value = num.replace(/^(\d{2})(\d{4})(\d)/, '($1) $2-$3'); // (XX) XXXX-XXXX
        } else {
            // Formato para números com DDD e com 9
            telefone.value = num.replace(/^(\d{2})(\d{5})(\d)/, '($1) $2-$3'); // (XX) XXXXX-XXXX
        }
}


function mascaraCEP(cep) {
    cep.value = cep.value
        .replace(/\D/g, '') 
        .replace(/(\d{5})(\d)/, '$1-$2');
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
const video = document.getElementById("videoIntro");
        
        // Ajusta a taxa de reprodução (1.0 é normal, valores menores tornam o vídeo mais lento)
        video.playbackRate = 0.5;