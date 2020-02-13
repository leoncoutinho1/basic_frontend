const { email, cpf, password, confirm_password } = document.getElementById('formSignUp');

const btnSubmitSignUp = document.getElementById('submitSignUp');

function validaCPF(cpf) {
  cpf = cpf.replace(/\D/g, '');
  let novoCpf = [];
  let soma = 0;
  let resto = 0;

  // primeiro dígito verificador
  for (i = 0; i < 9; i++) {
    novoCpf[i] = cpf[i];
    soma = soma + (cpf[i] * (10 - i));
  }

  resto = 11 - (soma % 11);

  if (resto > 9) {
    novoCpf[9] = 0;
  } else {
    novoCpf[9] = resto;
  }

  // segundo dígito verificador
  soma = 0;
  resto = 0;

  for (i = 0; i <= 9; i++) {
    soma = soma + (novoCpf[i] * (11 - i));
  }
  resto = 11 - (soma % 11);

  if (resto > 9) {
    novoCpf[10] = 0;
  } else {
    novoCpf[10] = resto;
  }
  novoCpf = novoCpf.join('');

  return (novoCpf === cpf) ? true : false;

}


btnSubmitSignUp.addEventListener('click', (e) => {
  e.preventDefault();
  if (!validaCPF(cpf.value)) {
    cpf.classList.add('invalidInputValue');
  }
});