function calcularRanking(vitorias, derrotas) {
    const saldo = vitorias - derrotas;
    let resultado = '';

    if (vitorias < 10) {
        resultado = 'Ferro';
    } else if (vitorias >= 10 && vitorias <= 20) {
        resultado = 'Bronze';
    } else if (vitorias > 20 && vitorias <= 50) {
        resultado = 'Prata';
    } else if (vitorias > 50 && vitorias <= 80) {
        resultado = 'Ouro';
    } else if (vitorias > 80 && vitorias <= 90) {
        resultado = 'Diamante';
    } else if (vitorias > 90 && vitorias <= 100) {
        resultado = 'Lendário';
    } else {
        resultado = 'Imortal';
    }

    return resultado;
}

// Exemplo de uso:
const vitorias = 85;
const derrotas = 20;
const saldoRankeadas = calcularRanking(vitorias, derrotas);
console.log(`O jogador possui ${vitorias} vitórias e ${derrotas} derrotas.`);
console.log(`O resultado do saldo de rankeadas é: ${saldoRankeadas}`);
