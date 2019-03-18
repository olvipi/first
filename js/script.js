const menu = document.getElementById('menu');
menu.onclick = function () {
    const x = document.getElementById('myTopNav');
    if (x.className === 'top-nav'){
      x.classList.add('responsive');
    } else {
        x.className = 'top-nav';
    }
};