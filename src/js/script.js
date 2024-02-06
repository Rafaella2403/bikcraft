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

// Alterando a ordem das imagens ao clicar em uma 
const gallery = document.querySelectorAll('.bicycle-image img')
const galleryContainer = document.querySelector('.bicycle-image')
console.log(galleryContainer);

gallery.forEach((picture) => {
  picture.addEventListener('click', (event) => {
    const img = event.currentTarget;
    const media = matchMedia('(min-width: 1000px)').matches;

    if (media) {
      galleryContainer.prepend(img);
    }
  })
});

