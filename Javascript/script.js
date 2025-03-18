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

function ativarConfetti() {
    let params = {
        particleCount: 500, 
        spread: 90, 
        startVelocity: 70, 
        origin: { x: 0, y: 0.5 }, 
        angle: 45 
    };

    confetti(params);

    params.origin.x = 1;
    params.angle = 135;
    confetti(params);
}

const emailsCadastrados = ["teste@gmail.com", "usuario@exemplo.com"]; // Simulação de emails cadastrados

function enviarFormulario(event) {
    event.preventDefault(); 

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

    if (emailsCadastrados.includes(email)) {
        alert("E-mail já cadastrado. Por favor, utilize outro.");
        return; 
    }else{
    emailsCadastrados.push(email);
    }


    const data = [
        ["Dados de Cadastro", "Usuario"],
        ["Nome", nome],
        ["E-mail", email],
        ["Telefone", telefone],
        ["Nome do Comércio", nomeComercio],
        ["Tipo de Comércio", tipoComercio],
        ["Endereço", endereco],
        ["Número", numero],
        ["Bairro", bairro],
        ["CEP", cep],
        ["Descrição", descricao],
        ["Aceitou os Termos?", aceiteTermos ? "Sim" : "Não"]
    ];

    const worksheet = XLSX.utils.aoa_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Dados do Formulário");
    XLSX.writeFile(workbook, "dados_formulario.xlsx");


    alert("Formulario Enviado com Sucesso!");
    ativarConfetti();
    document.getElementById("formularioCadastro").reset();
}



function mascaraTelefone(input) {
    input.value = input.value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d{5})(\d)/, "($1) $2-$3") 
        .replace(/(\d{4,5})-(\d{4})\d+?$/, "$1-$2");
}

function mascaraCEP(input) {
    input.value = input.value
        .replace(/\D/g, "")
        .replace(/^(\d{5})(\d)/, "$1-$2") 
        .replace(/(-\d{3})\d+?$/, "$1"); 
    }

function verificarLimiteImagens() {
    const inputImagens = document.getElementById('imagens');
    const arquivosSelecionados = inputImagens.files;

    if (arquivosSelecionados.length > 5) {
        alert("Você pode enviar no máximo 5 imagens.");
        inputImagens.value = "";
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    if (menuToggle) {
        const headerButtons = document.querySelector(".header-buttons");
        const boxSearch = document.querySelector(".box-search");
        const header = document.querySelector("header");
        const h1 = document.querySelector(".logo h1");
        const h2 = document.querySelector(".titulo-mobile");

        menuToggle.addEventListener("click", () => {
            headerButtons?.classList.toggle("show");
            boxSearch?.classList.toggle("show");
            header?.classList.toggle("compact-header");
        });
    }

});

document.addEventListener("DOMContentLoaded", () => {
    const stars = document.querySelectorAll('.star-rating span');
    const submitReview = document.getElementById('submit-review');
    const reviewerNameInput = document.getElementById('reviewer-name');
    const commentInput = document.getElementById('comment');
    const reviewList = document.getElementById('review-list');
    let selectedRating = 0;

    if (stars.length) {
        stars.forEach((star, index) => {
            star.addEventListener('mouseover', () => {
                resetStars();
                highlightStars(index + 1);
            });

            star.addEventListener('mouseout', () => {
                resetStars();
                highlightStars(selectedRating);
            });

            star.addEventListener('click', () => {
                selectedRating = index + 1;
                highlightStars(selectedRating);
            });
        });
    }

if (submitReview && reviewerNameInput && commentInput && reviewList) {
    submitReview.addEventListener('click', () => {
        const reviewerName = reviewerNameInput.value.trim();
        const comment = commentInput.value.trim();

        if (!reviewerName) {
            alert('Por favor, informe seu nome.');
            return;
        }

        if (!selectedRating) {
            alert('Por favor, selecione uma avaliação.');
            return;
        }

        if (!comment) {
            alert('Por favor, escreva um comentário.');
            return;
        }

        const li = document.createElement('li');
        li.innerHTML = `
            <div>
                <strong>${reviewerName}</strong> - 
                <span class="review-stars">${'★'.repeat(selectedRating)}${'☆'.repeat(5 - selectedRating)}</span>
            </div>
            <p>${comment}</p>
        `;
        reviewList.appendChild(li);

        selectedRating = 0;
        resetStars();
        reviewerNameInput.value = '';
        commentInput.value = '';
    });
}

function highlightStars(rating) {
    for (let i = 0; i < rating; i++) {
        stars[i].classList.add('hovered');
    }
}

function resetStars() {
    stars.forEach(star => {
        star.classList.remove('hovered', 'selected');
    });
}
});

const subMenus = document.querySelectorAll('.sub-menu');

subMenus.forEach(subMenu => {
  subMenu.style.display = 'none';

  const categoryItem = subMenu.parentElement;
  categoryItem.addEventListener('mouseover', () => {
    subMenu.style.display = 'block';
  });
  categoryItem.addEventListener('mouseout', () => {
    subMenu.style.display = 'none'; 
  });
});

const video = document.getElementById("videoIntro");
if (video) {
    video.playbackRate = 0.5; 
}
