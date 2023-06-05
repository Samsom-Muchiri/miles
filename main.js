const menu = document.querySelector('.menu');
function closemenu(){
    menu.style.height = '0px';
    document.querySelector('.fa-bars').style.display = 'block';
};
function openmenu(){
    menu.style.height = '100%';
    document.querySelector('.fa-bars').style.display = 'none';
};
const text = document.querySelectorAll('.animate')
const windowHeight = window.innerHeight
const halfHeight = windowHeight / 1.1

function scrollAnimation(){
  
  for (i = 0; i < text.length; i++){
    var textAnim = text[i]
    const elementTop = textAnim.getBoundingClientRect().top + window.scrollY
    const elementHalfway = elementTop < window.scrollY + halfHeight;
    if(elementHalfway){
      textAnim.classList.add('anim')
    }
  }
}
 
window.addEventListener('scroll', scrollAnimation)


//nav section
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  const nav =  document.querySelector('.navbar');
  if (prevScrollpos > currentScrollPos) {
    nav.classList.remove('visible');
  } else {
    nav.classList.add('visible');
  }
  prevScrollpos = currentScrollPos;
};

window.addEventListener("scroll", _ =>{
  const scroll = window.scrollY;
const nav =  document.querySelector('.navbar');

if (scroll <= 80) {
  nav.classList.remove('visible');
}
});

//link delay
const links = document.querySelectorAll('.delay');
const load = document.querySelector('.load');
links.forEach(link => {
  link.addEventListener("click", event =>{
     event.preventDefault();
     load.classList.add('load-in');
     setTimeout(() => {
      window.location.href = link.getAttribute('href');
     }, 500);
  });
});
//slider section
const rbtn = document.querySelector('.right');
const lbtn = document.querySelector('.left');
const slider = document.querySelector('.slider');
rbtn.addEventListener("click", _ =>{
    slider.scrollBy({
        left: 500,
        behavior: 'smooth',
    });
});
lbtn.addEventListener("click", _ =>{
    slider.scrollBy({
        left: -500,
        behavior: 'smooth',
    });
});


//cart section
function opencart() {
  document.querySelector('.cart-slider').style.transform = 'translateX(0px)';
  updatecartTotal();
};
function closecart() {
  document.querySelector('.cart-slider').style.transform = 'translateX(550px)';
};


const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.searchBtn');
const resultDiv = document.querySelector('.search-result');
 
const sections = [
  {id:"section1", name: "Section 1", page: "about.html"},
  {id:"section2", name: "Section 2", page: "about.html"},
  {id:"section3", name: "Section 3", page: "about.html"},
  {id:"section4", name: "Section 4", page: "about.html"},
  {id:"section5", name: "Section 5", page: "about.html"},
  {id:"section6", name: "Section 6", page: "about.html"},
  {id:"section7", name: "Section 7", page: "about.html"},
  {id:"section8", name: "Section 8", page: "about.html"},
  {id:"contact", name: "Contacts", page: "contacts.html"},
];

function search(query) {
  resultDiv.innerHTML = "";
  sections.forEach(section =>{
    if (section.name.toLowerCase().includes(query.toLowerCase())) {
      const link = document.createElement('a');
      link.href = `${section.page}#${section.id}`;
      link.textContent = section.name;
      link.classList.add('link');
      resultDiv.appendChild(link);
    }
  });
  if(searchInput.value === ""){
    resultDiv.style.display = 'none'
  } else{
    resultDiv.style.display = 'block'
  }
  if (resultDiv.innerHTML === "") {
    resultDiv.innerHTML = `No results found <svg class="svg" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mood-sad" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <circle cx="12" cy="12" r="9" />
    <line x1="9" y1="10" x2="9.01" y2="10" />
    <line x1="15" y1="10" x2="15.01" y2="10" />
    <path d="M9.5 15.25a3.5 3.5 0 0 1 5 0" />
  </svg>!`;
  
  }
}

searchInput.addEventListener('input', _ =>{
  const query = searchInput.value;
  search(query);
})
