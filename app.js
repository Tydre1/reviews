// local reviews data
const reviews = [
  {
    id: 1,
    name: 'Natália Alves',
    job: 'Nutricionista',
    img: './natalia.jpg',
    text: "Natália tem 20 anos e faz faculdade de nutricionismo, e já faço estágio em um hospital público em POA-RS.",
  },
  {
    id: 2,
    name: 'Antonieta Barbosa',
    job: 'Cuidador de Idosos',
    img: './antonieta.jpg',
    text: 'Antonieta é uma pessoa que nunca vau desistir dos seus sonhos, atualmente está fazendo um curso para tirar carteiria de motorista e também em busca do seu passaporte para viajar pelo mundo, é mãe solteira e é guerreira.',
  },
  {
    id: 3,
    name: 'Héstia',
    job: 'Ser uma Gata',
    img: './hestiaAGata.jpg',
    text: 'Miau miau Miau miau Miau miau Miau miau Miau miau Miau miau Miau miau Miau miau Miau miau Miau miau Miau miau Miau miau Miau miau Miau miau Miau miau Miau miau Miau miau Miau miau Miau miau Miau miau Miau miau Miau miau ',
  },
  {
    id: 4,
    name: 'André Barbosa',
    job: 'o chefe',
    img: './andre.webp',
    text: 'André é uma pessoa com muitos dotes, sabe cozinhar, lavar roupa, andar de skate, andar de bike, sabe fazer música, é bom em jogos. É um bom lider e adora aprender coisas novas, atualmente ser um programador é um dos sonhos dele. Também faz faculdade de Gestão Financeira aonde está se saindo muito bem. ',
  },
  {
    id: 5,
    name:"Thuana",
    job: "Tatto Artist",
    img: "./thuana.jpeg",
    text: "Thuana is from Turkey and she wanna be a giant artist.",
  }
];

// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener('click', function () {
  console.log('hello');

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
