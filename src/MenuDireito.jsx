import { useState } from 'react';
import './MenuDireito.css';

function MenuDireito() {
    const [getResult, setResult] = useState(''); // Resultado digitado pelo jogador
    const [getPontos, setPontos] = useState(0); // Pontuação do jogador
    const [getOperador, setOperador] = useState(''); // Operador sorteado
    const [getVal1, setVal1] = useState(0); // Primeiro número sorteado
    const [getVal2, setVal2] = useState(0); // Segundo número sorteado

    // Função para gerar um número aleatório entre 1 e 10
    function gerarNumeroAleatorio() {
        return Math.floor(Math.random() * 10) + 1;
    }

    // Função para sortear um desafio
    function sortearDesafio() {
        const operadores = ['+', '-', '×', '÷'];
        const operadorAleatorio = operadores[Math.floor(Math.random() * operadores.length)];

        setVal1(gerarNumeroAleatorio());
        setVal2(gerarNumeroAleatorio());
        setOperador(operadorAleatorio);
        setResult(''); // Limpa o campo de entrada
    }

    // Função para validar o resultado
    function validarResultado() {
        let resultadoCorreto;
        switch (getOperador) {
            case '+':
                resultadoCorreto = getVal1 + getVal2;
                break;
            case '-':
                resultadoCorreto = getVal1 - getVal2;
                break;
            case '×':
                resultadoCorreto = getVal1 * getVal2;
                break;
            case '÷':
                resultadoCorreto = getVal2 !== 0 ? getVal1 / getVal2 : 0;
                break;
            default:
                resultadoCorreto = null;
        }

        if (parseFloat(getResult) === resultadoCorreto) {
            setPontos(getPontos + 1);
            alert('Resposta correta!');
        } else {
            alert(`Resposta incorreta! O resultado correto era ${resultadoCorreto}.`);
        }
    }

    // Função para reiniciar o jogo
    function novoJogo() {
        setPontos(0);
        setVal1(0);
        setVal2(0);
        setOperador('');
        setResult('');
    }

    return (
        <>
            <div className="itens itens1">
                <h2>Você tem {getPontos} pontos</h2>
                <button className="btnSorteador" onClick={sortearDesafio}>
                    Sortear Desafio
                </button>
            </div>

            <div className="itens itens2">
                <p>Quanto é:</p>
                <p>
                    {getVal1} {getOperador} {getVal2}
                </p>
                <input
                    type="number"
                    value={getResult}
                    onChange={(event) => setResult(event.target.value)}
                    placeholder="Digite o resultado"
                />
                <p>Resultado digitado: {getResult}</p>
                <button className="btnValidador" onClick={validarResultado}>
                    Validar
                </button>
                <button className="btnNovoJogo" onClick={novoJogo}>
                    Novo Jogo
                </button>
            </div>
        </>
    );
}

export default MenuDireito;