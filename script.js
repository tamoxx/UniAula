
let nome = prompt("Informe seu nome: "); 
let altura = parseFloat(prompt("Informe sua altura em metros (Ex: 1.75): "));
let peso = parseFloat(prompt("Informe seu peso em kg (Ex: 70): "));


let tabelaImc = [
    "--- TABELA DE REFERÊNCIA DO IMC ---",
    "• Menor que 18.5: Abaixo do peso",
    "• 18.5 até 24.9: Peso normal",
    "• 25.0 até 29.9: Sobrepeso",
    "• 30.0 até 34.9: Obesidade Grau I",
    "• 35.0 até 39.9: Obesidade Grau II",
    "• Maior ou igual a 40.0: Obesidade Grau III"
];


function calcularImc(peso, altura) {
    return peso / (altura ** 2); 
}

function classificarImc(imc) {
    if (imc < 18.5) return "Abaixo do peso";
    else if (imc < 25) return "Peso normal";
    else if (imc < 30) return "Sobrepeso";
    else if (imc < 35) return "Obesidade Grau I";
    else if (imc < 40) return "Obesidade Grau II";
    else return "Obesidade Grau III";
}

function gerarRelatorioImc(nome, imc, classificacao, tabela) {

    let textoTabela = tabela.join("\n");
    

    let mensagemFinal = `Olá, ${nome}!\n\n` +
                        `Seu IMC calculado é: ${imc.toFixed(2)}\n` +
                        `Sua classificação atual é: ${classificacao}\n\n` +
                        `${textoTabela}`;
    
    alert(mensagemFinal);
}


let imcResultado = calcularImc(peso, altura);
let faixaAtual = classificarImc(imcResultado);


gerarRelatorioImc(nome, imcResultado, faixaAtual, tabelaImc);
