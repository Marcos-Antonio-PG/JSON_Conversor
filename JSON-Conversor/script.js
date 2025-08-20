const check = document.getElementById('check')
const inpHob1 = document.getElementById('hobbie')
const inpHob2 = document.getElementById('hobbie2')
const inpHob3 = document.getElementById('hobbie3')
const inpNome = document.getElementById('nome')
const inpIdade = document.getElementById('idade')
const inpProfis = document.getElementById('profis')
const res = document.querySelector('p.res')
const jsonConvBtn = document.getElementById('json-btn')
const stringConvBtn = document.getElementById('string-btn')

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
    let nome = inpNome.value
    let idade = inpIdade.value
    let profis = inpProfis.value
    let hobbie1 = inpHob1.value
    let hobbie2 = inpHob2.value
    let hobbie3 = inpHob3.value

    hobbies = []

    if (hobbie1.trim() !== '') {
        hobbies.push(hobbie1)
    }

    if (check.checked && hobbie2.trim() !== '') {
        hobbies.push(hobbie2)
    }

    if (check.checked && hobbie3.trim() !== '') {
        hobbies.push(hobbie3)
    }


    if (nome == '') {
        alert('Erro! Digite seu nome!')
    } else if (idade == '') {
        alert('Erro! Digite sua idade!')
    } else if (profis == '') {
        alert('Erro! Digite sua profissão, se não tiver uma, escreva "Desempregado"')
    } else if (hobbie1 == '') {
        alert('Erro! Digite seu Hobbie, algo que sempre faz nos tempos livres!')
    } else {

        res.style.padding = '10px'
        res.innerHTML = `{
    nome: "${nome}",
    idade: ${idade},
    profissão: "${profis}",
    hobbies: [${hobbies.map(h => `"${h}"`).join(", ")}],
    },`

    }

}

function converterJson() {

    if (res.innerHTML == '') {
        alert('Erro! Gere um Object para poder converter!')
    } else {
        let nome = inpNome.value
        let idade = inpIdade.value
        let profis = inpProfis.value
        let hobbie1 = inpHob1.value
        let hobbie2 = inpHob2.value
        let hobbie3 = inpHob3.value

        if (res.innerHTML !== '') {


            res.style.padding = '10px'
            res.innerHTML = `{
            "nome": "${nome}",
            "idade": ${idade},
            "profissão": "${profis}",
            "hobbies": [${hobbies.map(h => `"${h}"`).join(", ")}]
            }`

            jsonConvBtn.classList.add('esconder')
            stringConvBtn.classList.remove('esconder')

        }


    }


}


function converterString() {
    let nome = inpNome.value
    let idade = inpIdade.value
    let profis = inpProfis.value
    let hobbie1 = inpHob1.value
    let hobbie2 = inpHob2.value
    let hobbie3 = inpHob3.value
    let tipo = "object"

    res.style.padding = '10px'
    res.innerHTML = `{
        nome: "${nome}",
        idade: ${idade},
        profissão: "${profis}",
        hobbies: [${hobbies.map(h => `"${h}"`).join(", ")}],
        },`

        jsonConvBtn.classList.remove('esconder')
        stringConvBtn.classList.add('esconder')
}
