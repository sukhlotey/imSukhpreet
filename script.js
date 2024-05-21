const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
const navItem=document.querySelectorAll('#navbar > li');

if(bar) {
    bar.addEventListener('click', () => {
      nav.classList.add('active');
    })
};

if (navItem) {
  navItem.forEach(item => {
    item.addEventListener('click', () => {
      nav.classList.remove('active');
    })
  })
}

if(close) {
    close.addEventListener('click', () => {
      nav.classList.remove('active');
    })
};

