const $ = id => document.getElementById(id)
const $$ = select => document.querySelector(select)
const $$$ = selects => document.querySelectorAll(selects)

// globals elements
let hamburger_menu = $('hamburger-menu')
let ul = $$('ul')
let nav = $$('nav')
let dynamic_text = $('dynamic-text')

// element tolls 
let open = true



// hamburger-menu
hamburger_menu.onclick = () => {
    ul.classList.toggle('active');
}

// scroll nav
window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        $$('nav').classList.add('nav-scroll');
    } else {
        $$('nav').classList.remove('nav-scroll');
    }
});

// dynamic_text
// dynamic_text.addEventListene ( , () => {
    
// } )

