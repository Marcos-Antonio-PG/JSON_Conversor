const check = document.getElementById('check')
const inpHob1 = document.getElementById('hobbie')
const inpHob2 = document.getElementById('hobbie2')
const inpHob3 = document.getElementById('hobbie3')
const inpNome = document.getElementById('nome')
const inpIdade = document.getElementById('idade')
const inpProfis = document.getElementById('profis')
const res = document.querySelector('p.res')
const jsonConvBtn = document.getElementById('json-btn')
const ObjConvBtn = document.getElementById('string-btn')

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

function pegarForm() {

    hobbies = []

    if (inpHob1.value.trim() !== '') {
        hobbies.push(inpHob1.value)
    }

    if (check.checked && inpHob2.value.trim() !== '') {
        hobbies.push(inpHob2.value)
    }

    if (check.checked && inpHob3.value.trim() !== '') {
        hobbies.push(inpHob3.value)
    }

    return {
        nome: inpNome.value,
        idade: inpIdade.value,
        profissão: inpProfis.value,
        hobbies: hobbies
    }
}
function gerarObject() {

    const pessoa = pegarForm()

    if (pessoa.nome == '') {
        alert('Erro! Digite seu nome!')
    } else if (pessoa.idade == '') {
        alert('Erro! Digite sua idade!')
    } else if (pessoa.profissão == '') {
        alert('Erro! Digite sua profissão, se não tiver uma, escreva "Desempregado"')
    } else if (pessoa.hobbies.lenght === 0) {
        alert('Erro! Digite seu Hobbie, algo que sempre faz nos tempos livres!')
    } else {

        res.style.padding = '10px'
        res.innerHTML = `{
        nome: "${pessoa.nome}",
        idade: ${pessoa.idade},
        profissão: "${pessoa.profissão}",
        hobbies: [${hobbies.map(h => `"${h}"`).join(", ")}],
        },`

    }

}

function converterToJson() {

    const pessoa = pegarForm()

    if (res.innerHTML.trim() == '') {
        alert('Erro! Gere um Object para poder converter!')
    }

    if (res.innerHTML !== '') {

        res.innerHTML = JSON.stringify(pessoa, null, 4)

        jsonConvBtn.classList.add('esconder')
        ObjConvBtn.classList.remove('esconder')

    }


}



function converterToObject() {

    const pessoa = pegarForm()


      res.style.padding = '10px'
        res.innerHTML = `{
        nome: "${pessoa.nome}",
        idade: ${pessoa.idade},
        profissão: "${pessoa.profissão}",
        hobbies: [${hobbies.map(h => `"${h}"`).join(", ")}],
        },`

        jsonConvBtn.classList.remove('esconder')
        ObjConvBtn.classList.add('esconder')


}
