const botoes = document.querySelectorAll('button');
let display = document.getElementById('display');

botoes.forEach(botao => {
  botao.addEventListener('click', function() {
    if (this.textContent === '=') {
      display.value = eval(display.value);
    } else if (this.textContent === 'C') {
      display.value = '';
    } else {
      display.value += this.textContent;
    }
  });
});
