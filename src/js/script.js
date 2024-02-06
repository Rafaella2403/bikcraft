// Elementos que eu quero selecionar
const links = document.querySelectorAll('.header-menu a');

// Adicionando um after no link do header quando a página estiver selecionada
links.forEach((link) => {
  const ulr = location.href;
  const href = link.href;
  if(ulr.includes(href)) {
    link.classList.add("active");
  }
});

// Adicionando animação de colapse na tela de seguros, seção perguntas frequentes
const questions = document.querySelectorAll('.questions button');

questions.forEach((question) => {
  question.addEventListener('click', (event) => {
    const question = event.currentTarget;
    const control = question.getAttribute('aria-controls')

    const response = document.getElementById(control)
    response.classList.toggle('active');

    const isClassActive = response.classList.contains('active')

    question.setAttribute('aria-expanded', isClassActive)
    


  })
})
