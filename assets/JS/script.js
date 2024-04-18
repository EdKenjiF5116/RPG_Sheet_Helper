var rangeInput = document.querySelector('.Nível_linha7 input[type="range"]');
var spanLvl = document.getElementById('Lvl');
rangeInput.addEventListener('input', function() {
       spanLvl.textContent = rangeInput.value;
});
spanLvl.textContent = rangeInput.value;
