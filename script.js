const btnToggle = document.querySelector('.btn-toggle');
const container = document.querySelector('.container');
const orange = document.querySelector('.orange');
const input = document.getElementById('input');
const submitBtn = document.querySelector('.submit');
const circle = document.querySelector('.circle');

let a = 0;

btnToggle.addEventListener('click', () =>{
    container.classList.toggle('active');

    if (a === 0){
        btnToggle.innerHTML = 'Turn off';
        a = 1;
    }
    else {
        btnToggle.innerHTML = 'Turn on';
        a = 0;
    }
});
