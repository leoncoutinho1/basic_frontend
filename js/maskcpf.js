document.getElementById('cpf').addEventListener('input', (e) => {
    let cpf = e.target.value.replace(/\D/g, '');  //substitui todos os caracteres não numericos por vazio.
    cpf = cpf.replace(/(\d{3})(\d+)/, '$1.$2');
    cpf = cpf.replace(/(^\d{3}.\d{3})(\d+)/, '$1.$2');
    cpf = cpf.replace(/(^\d{3}.\d{3}.\d{3})(\d+)/, '$1-$2');
    // nesse ponto ainda ficava um numero a mais caso fosse copiado e colado um numero com mais de 14 caracteres
    // corrigi usando isso:
    cpf = cpf.replace(/(^\d{3}.\d{3}.\d{3}-\d{2})(\d+)/, '$1');  //separa o cpf já formatado em dois grupos e elimina o restante
    e.target.value = cpf;
});
