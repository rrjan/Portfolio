// wybór elem. DOM
const ham_btn = document.querySelector('.ham_btn');
const menu = document.querySelector('.menu');
const menu_nav = document.querySelector('.menu_nav');
const menu_bran = document.querySelector('.menu_bran');
const menu_item = document.querySelectorAll('.nav_item');

// 
let show_menu = false;
ham_btn.addEventListener('click', toggle_menu);

function toggle_menu() {
    if(!show_menu) {
        ham_btn.classList.add('close');
        menu.classList.add('show');
        menu_nav.classList.add('show');
        menu_bran.classList.add('show');
        menu_item.forEach(item => item.classList.add('show'));
        show_menu = true;
    }
    else {
        ham_btn.classList.remove('close');
        menu.classList.remove('show');
        menu_nav.classList.remove('show');
        menu_bran.classList.remove('show');
        menu_item.forEach(item => item.classList.remove('show'));
        show_menu = false;
    }
}