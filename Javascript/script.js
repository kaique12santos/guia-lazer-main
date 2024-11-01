function toggleFAQ(element) {
    const allAnswers = document.querySelectorAll('.faq-answer');
    const allIcons = document.querySelectorAll('.icon');
    const answer = element.nextElementSibling;
    const icon = element.querySelector('.icon');

    // Fecha todas as respostas abertas
    allAnswers.forEach((ans, idx) => {
        if (ans !== answer) {
            ans.style.display = 'none';
            allIcons[idx].textContent = '+';  // Volta o ícone para "+"
        }
    });

    // Abre ou fecha a resposta clicada
    if (answer.style.display === "block") {
        answer.style.display = "none";
        icon.textContent = "+";
    } else {
        answer.style.display = "block";
        icon.textContent = "-";
    }
}