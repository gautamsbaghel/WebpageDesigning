const searhBarWidth = document.querySelector('.header_bottom ul').offsetWidth;
const searchBar = document.querySelector('.search_bar');
searchBar.style.width = `${searhBarWidth}px`;

const header = document.querySelector('header');
const main = document.querySelector('main');
const nav = document.querySelector('nav');
const contact = document.querySelector('.contact');
contact.style.height = `calc( 100vh - ${header.offsetHeight}px - ${nav.offsetHeight}px - 2em )`;

const attributionTrigger = document.querySelector('.logo img');
const attribution = document.querySelector('.attribution');
attributionTrigger.addEventListener('mouseover',()=>{
    attribution.style.display = 'block';
    attribution.querySelector('i').addEventListener('click',()=>{
        attribution.style.display = 'none';
    })
})

const footer = document.querySelector('footer');
const map = document.querySelector('.map');
map.style.height = `calc(100vh - 2em - ${footer.offsetHeight}px)`;
