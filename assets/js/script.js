const form = document.querySelector('#form')
const firstNameInput = document.querySelector('#first-name')
const lastNameInput = document.querySelector('#last-name')
const emailInput = document.querySelector('#email')
const msgTextarea = document.querySelector('#msg')

//Barra de progressão
const prog25 = document.querySelector('#prog-25');
const prog50 = document.querySelector('#prog-50');
const prog75 = document.querySelector('#prog-75');
const prog100 = document.querySelector('#prog-100');

form.addEventListener("input", updateProgressBar);
form.addEventListener('submit', handleSubmit);

//FUNCTION PARA MUDAR BARRA DE PROGRESSÃO
function updateProgressBar() {
    //Número de inputs preenchidos(filled) começa em 0
    let filledCount = 0;
    
    //Está verificando se o valor dentro dos inputs é diferente de nada, ou seja, foi preenchido
    //trim() retira qualquer espaço em branco p/ o valor do input não ser inválido
    if (firstNameInput.value.trim() !== '' || lastNameInput.value.trim() !== '') {
        //Inputs preenchidos recebem +1
      filledCount++;
    }
  
    if (emailInput.value.trim() !== '') {
      filledCount++;
    }
  
    if (msgTextarea.value.trim() !== '') {
      filledCount++;
    }
    
    //Cálculo do CSS da barra de progressão
    if (filledCount >= 1) {
        //Adicionando minha classe .progress-active na div referida para tornar a barra 25% visível
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
  
    if (filledCount === 3) {
      prog100.classList.add('progress-active');
    } else {
      prog100.classList.remove('progress-active');
    }
  }

  //FUNCTION PARA VALIDAÇÃO DE PREENCHIMENTO CORRETO DOS INPUTS
  function handleSubmit(event) {
    event.preventDefault();
  
    // Verificação de nome vazio
    if (firstNameInput.value === '' || lastNameInput.value === '') {
      alert('Por favor, preencha o seu nome e sobrenome.');
      return;
    }
  
    // Verificação email vazio
    if (emailInput.value === '' || !isEmailValid(emailInput.value)) {
      alert('Por favor, preencha o campo e-mail corretamente.');
      return;
    }

   // Verificação msg vazia
    if (msgTextarea.value === '') {
      alert('Você precisa escrever uma mensagem!');
      return;
    }
  
    // Todos os campos corretamente preenchidos, envie o formulário
    form.submit();
  }

//FUNCTION PARA VALIDAR EMAIL (preenchidos corretamente)
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