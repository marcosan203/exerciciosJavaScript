/*
Exercício 1: Calculadora de Média

Instruções:

    Crie dois campos de entrada (input) para os alunos inserirem duas notas.
    Crie um botão (button) para calcular a média.
    Crie um parágrafo (p) para exibir o resultado.

JavaScript:

    Pegue o botão pelo ID.
    Adicione um listener de clique.
    Na função de clique, pegue os valores dos inputs, converta-os para números e calcule a média.
    Exiba o resultado no parágrafo.
--------------------------------------------------------------------------------------------------------------------------------
*/

const primeiraNota = document.getElementById("primeiraNota");
const segundaNota = document.getElementById("segundaNota");
const btnCalcularMedia = document.getElementById("btnCalcularMedia");
const resposta = document.getElementById("resposta");


btnCalcularMedia.addEventListener('click', function(){
    let notaUm = parseFloat(primeiraNota.value);
    let notaDois = parseFloat(segundaNota.value);
    let resultado = 0;

    if(isNaN(notaUm) || isNaN(notaDois)){
        resposta.innerHTML = "Os campos devem ser prenenchidos corretamente, verivique as informações e tente novamente";
        return;
    }else{
        resultado = ((notaUm + notaDois) / 2);
        resposta.innerHTML = `Media: ${resultado}`;
    }

});

/*
------------------------------------------------------------------------------------------------------------------------------ */

/*

Exercício 2: Conversor de Temperatura

Instruções:

    Crie um campo de entrada (input) para o aluno inserir a temperatura em Celsius.
    Crie um botão (button) para converter a temperatura para Fahrenheit.
    Crie um parágrafo (p) para exibir o resultado.

JavaScript:

    Pegue o botão pelo ID.
    Adicione um listener de clique.
    Na função de clique, pegue o valor do input, converta para número e aplique a fórmula de conversão.
    Exiba o resultado no parágrafo.
*/                                  
const temperatura = document.getElementById("temperatura");
const btnConverterTemperatura = document.getElementById("btnConverterTemperatura");
const temperaturaConvertida = document.getElementById("temperaturaConvertida");

btnConverterTemperatura.addEventListener('click', function(){
    let temperaturaParaConvertere = parseFloat(temperatura.value);
    let fahrenheit = 0;

    if(isNaN(temperaturaParaConvertere)){
        temperaturaConvertida.innerHTML = "Por favor informe um valor";
        return;
    }else{
        //°F = (°C ⋅ 1,8) + 32
        fahrenheit = (temperaturaParaConvertere * 1.8 ) + 32;
        temperaturaConvertida.innerHTML = `Temperatura convertida em Fahrenheit: ${fahrenheit.toFixed(0)}`;
    }
});
/*
--------------------------------------------------------------------------------------------------------------------------------
*/

/*

Exercício 3: Contador de Caracteres

Instruções:

    Crie um campo de entrada (input) para o aluno inserir um texto.
    Crie um botão (button) para contar os caracteres.
    Crie um parágrafo (p) para exibir o resultado.

JavaScript:

    Pegue o botão pelo ID.
    Adicione um listener de clique.
    Na função de clique, pegue o valor do input e conte o número de caracteres.
    Exiba o resultado no parágrafo.

*/
const texto = document.getElementById("texto");
const btnContarCaracteres = document.getElementById("btnContarCaracteres");
const quantidaDeCaracteres = document.getElementById("quantidaDeCaracteres");

btnContarCaracteres.addEventListener('click', function(){
    let numeroDecaracteres = texto.value.length;

    if(isNaN(numeroDecaracteres) || numeroDecaracteres == 0){
        quantidaDeCaracteres.innerHTML = "Por favor, informe texto";
        return;
    }else{
        quantidaDeCaracteres.innerHTML = `O texto possue ${numeroDecaracteres} caracteres`
    }
});

/*
--------------------------------------------------------------------------------------------------------------------------------
*/
/*
Exercício 4: Verificador de Palíndromo

Instruções:

    Crie um campo de entrada (input) para o aluno inserir uma palavra.
    Crie um botão (button) para verificar se a palavra é um palíndromo.
    Crie um parágrafo (p) para exibir o resultado.

JavaScript:

    Pegue o botão pelo ID.
    Adicione um listener de clique.
    Na função de clique, pegue o valor do input, remova espaços e verifique se a palavra é igual ao seu reverso.
    Exiba o resultado no parágrafo.

*/
const palindromo = document.getElementById("palindromo");
const btnVerificaPalidromo = document.getElementById("btnVerificaPalidromo");
const respostaPalidromo = document.getElementById("respostaPalidromo");

btnVerificaPalidromo.addEventListener('click', function(){
    let textoOriginal = palindromo.value.trim().toLowerCase();
    let reverso = "";
    if(textoOriginal === ""){
        respostaPalidromo.innerHTML = "Por favor, digite uma palavra.";
        return;
    }else{
        reverso =  textoOriginal.split('').reverse().join('');
        if(textoOriginal === reverso){
            respostaPalidromo.innerHTML = `${textoOriginal} é um palíndromo!`;
        }else{
            respostaPalidromo.innerHTML = `${textoOriginal} não é um palídromo!`;
        }
 
    }
});
/*
--------------------------------------------------------------------------------------------------------------------------------
*/

/* 
Exercicio 5: Alterar Bordas de um Elemento

Instruções:

    Crie um campo de entrada (input) para o aluno inserir a espessura da borda (em pixels, como 5px).
    Crie um botão (button) para aplicar a espessura da borda.
    Crie uma div cuja borda será alterada.

JavaScript:

    Pegue o botão pelo ID.
    Adicione um listener de clique.
    Na função de clique, pegue o valor do input.
    Altere o estilo da borda da div usando element.style.borderWidth.
*/
const entradaTamanhoBorda = document.getElementById('entradaTamanhoBorda');
const btnAplicarEspessura = document.getElementById('btnAplicarEspessura');
const divResposta = document.getElementById('divResposta');
const mensageError = document.getElementById('mensageError');

btnAplicarEspessura.addEventListener('click', function(){
    
    let novaEspessua = parseFloat(entradaTamanhoBorda.value);

    if(isNaN(novaEspessua)){
        mensageError.innerHTML = "Por favor informe um numero valido";
        return
    }else{
        divResposta.style.borderWidth = `${novaEspessua}px`;
    }
})

/*
--------------------------------------------------------------------------------------------------------------------------------
*/

/*
Exercicio 6: Alterar Opacidade de um Elemento

Instruções:

    Crie um campo de entrada (input) para o aluno inserir um valor de opacidade (de 0 a 1, como 0.5).
    Crie um botão (button) para aplicar a opacidade.
    Crie uma div cuja opacidade será alterada.

JavaScript:

    Pegue o botão pelo ID.
    Adicione um listener de clique.
    Na função de clique, pegue o valor do input.
    Altere o estilo de opacidade da div usando element.style.opacity.

*/

const entradaTopacidade = document.getElementById('entradaTopacidade');
const btnAplicaropacidade = document.getElementById('btnAplicaropacidade');
const mensageErroOpacidade = document.getElementById('mensageErroOpacidade');
const divOpacidade = document.getElementById('divOpacidade');

btnAplicaropacidade.addEventListener('click', function(){
    let novaOpacidade = parseFloat(document.getElementById('entradaTopacidade').value);
   
    if(isNaN(novaOpacidade)){
        mensageErroOpacidade.innerHTML = "Por favor informe um numero valido";
        return
    }else{
        divOpacidade.style.opacity = novaOpacidade;
    }
})

/*
--------------------------------------------------------------------------------------------------------------------------------
*/

/*
Exercicio 7: Alternar Visibilidade

Instruções:

    Crie um botão (button) para alternar a visibilidade de um elemento.
    Crie uma div que será mostrada ou escondida.

JavaScript:

    Pegue o botão pelo ID.
    Adicione um listener de clique.
    Na função de clique, verifique o estado atual da div (visível ou escondida).
    Altere o estilo de visibilidade da div usando element.style.display (por exemplo, block para mostrar e none para esconder).
*/
const btnAlterarVisibilidade = document.getElementById('btnAlterarVisibilidade');
const divAlterarVisibilidade = document.getElementById('divAlterarVisibilidade');
let novoEstado = 'block';

btnAlterarVisibilidade.addEventListener('click', function(){
  
    if(novoEstado == 'none'){
        novoEstado = 'block';
    }else{
        novoEstado = 'none';
    }
    divAlterarVisibilidade.style.display = novoEstado;
   
});

/*
--------------------------------------------------------------------------------------------------------------------------------
*/