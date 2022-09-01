let home = document.querySelector ('.home');
let img = document.querySelector ('.home img');
let h6 = document.querySelector ('.home h6');

home.addEventListener ('click', function () {
    home.classList.add ("homi");
    home.style.filter = 'none';
    h6.style.display = 'block';
    img.style.filter = 'none';
});