const calcular = document.getElementById('calcular')

function imc(){

    const nome = document.getElementById('nome').value //pega o valor dele
    const altura = document.getElementById('altura').value //pega o valor dele
    const peso = document.getElementById('peso').value // pega o valor dele
    const resultado = document.getElementById('resultado')

    if(nome !== '' && altura !== '' && peso !== ''){ //value é para pegar o valor
        const valorIMC = (peso / (altura * altura)).toFixed(1)//casas decimais

        let classificacao = ""

        if(valorIMC < 18.5){

            classificacao = 'abaixo do peso'
        }
        else if(valorIMC < 25){

            classificacao = 'peso ideal'

        }
        else if(valorIMC < 30){

            classificacao = 'levemente acima do peso'
        }
        else if(valorIMC < 35){
            classificacao = 'Obesidade grau I'
        }
        else if(valorIMC < 40){

            classificacao = 'Obesidade grau II'
        }
        else{

            classificacao = 'Obesidade grau III'
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}!!!`

    }else{
        resultado.textContent = 'Preencha todos os campos!!!' //mostra o texto na div

    }

}

calcular.addEventListener('click',imc)//metodo para saber quando clicou no botão