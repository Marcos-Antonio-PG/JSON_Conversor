const check = document.getElementById('check')
const inpHob1 = document.getElementById('hobbie')
const inpHob2 = document.getElementById('hobbie2')
const inpHob3 = document.getElementById('hobbie3')
const inpNome = document.getElementById('nome')
const inpIdade = document.getElementById('idade')
const inpProfis = document.getElementById('profis')


check.addEventListener('change', () => {
    if (check.checked) {

        inpHob2.classList.remove('esconder')
        inpHob2.classList.add('mostrar')
        inpHob3.classList.remove('esconder')
        inpHob3.classList.add('mostrar')

    } else {
        inpHob2.classList.remove('mostrar')
        inpHob2.classList.add('esconder')
        inpHob3.classList.remove('mostrar')
        inpHob3.classList.add('esconder')
    }

})

function gerarObject() {
    const nome = inpNome.value
    const idade = inpIdade.value
    const profis = inpProfis.value

    
}