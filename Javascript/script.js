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

document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o botão de menu
    const menuToggle = document.getElementById("menuToggle");

    // Seleciona os elementos para mostrar/ocultar
    const headerButtons = document.querySelector(".header-buttons");
    const boxSearch = document.querySelector(".box-search");

    // Adiciona o evento de clique ao botão de menu
    menuToggle.addEventListener("click", function() {
        // Alterna a classe "show" nos elementos
        headerButtons.classList.toggle("show");
        boxSearch.classList.toggle("show");
    });
});