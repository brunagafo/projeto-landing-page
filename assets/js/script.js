const form = document.querySelector('#form')
const firstNameInput = document.querySelector('#first-name')
const lastNameInput = document.querySelector('#last-name')
const emailInput = document.querySelector('#email')
const msgTextarea = document.querySelector('#msg')

const prog25 = document.querySelector('#prog-25');
const prog50 = document.querySelector('#prog-50');
const prog75 = document.querySelector('#prog-75');
const prog100 = document.querySelector('#prog-100');

form.addEventListener("input", updateProgressBar);

function updateProgressBar() {
    const inputs = [firstNameInput, lastNameInput, emailInput, msgTextarea];
    let filledCount = 0;

    inputs.forEach(input => {
        if (input.value.trim() !== "") {
            filledCount++;
        }
    });

    if (filledCount >= 1) {
        prog25.classList.add('progress-active');
    } else {
        prog25.classList.remove('progress-active');
    }

    if (filledCount >= 2) {
        prog50.classList.add('progress-active');
    } else {
        prog50.classList.remove('progress-active');
    }

    if (filledCount >= 3) {
        prog75.classList.add('progress-active');
    } else {
        prog75.classList.remove('progress-active');
    }

    if (filledCount === 4) {
        prog100.classList.add('progress-active');
    } else {
        prog100.classList.remove('progress-active');
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    //Verificação de nome vazio
    if(firstNameInput.value === "" || lastNameInput.value ==="") {
        alert("Por favor, preencha o seu nome e sobrenome.");
        return
    }

    //Verificação email vazio
    if(emailInput.value === "" || isEmailValid(emailInput.value)) {
        alert("Por favor, preencha o campo e-mail corretamente.")
        return
    }

    //Verificação mensagem vazia
    if(msgTextarea.value === "") {
        alert("Você precisa escrever uma mensagem!")
        return
    }

    //Todos os campos corretamente preenchidos, envie o form
    form.submit()
});

//Function para validar e-mail (preenchidos corretamente)
function isEmailValid(email) {
    //regex de validação
    const emailRegex = new RegExp(
        //usuario@dominio.com.br
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    //teste do regex
    if (emailRegex.test(email)) {
        return true;
    } else {
        return false;
    }


}