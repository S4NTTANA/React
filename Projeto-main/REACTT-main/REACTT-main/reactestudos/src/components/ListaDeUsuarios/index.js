// src/components/ListaDeJogadores/index.js

import { useState, useEffect } from "react";
import axios from "axios";
import './styles.css';

function ListaDeJogadores() {
    const [jogadores, setJogadores] = useState([]);

    useEffect(() => {
        const carregarJogadores = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/jogadores');
                setJogadores(response.data);
            } catch (error) {
                alert('Erro ao buscar jogadores: ' + (error.response?.data?.mensagem || error.message));
                setJogadores([]);
            }
        };
        carregarJogadores();
    }, []);

    return (
        <div className="lista-jogadores-container">
            <h1>Lista de Jogadores</h1>
            <ul id="listaJogadores" className="lista-jogadores">
                {jogadores.length === 0 ? (
                    <li>Nenhum jogador encontrado.</li>
                ) : (
                    jogadores.map(jogador => (
                        <li key={jogador.id} className="jogador-item">
                            <strong>Nome:</strong> {jogador.nome}<br />
                            <strong>Sexo:</strong> {jogador.sexo}<br />
                            <strong>Idade:</strong> {jogador.idade} anos<br />
                            <strong>Altura:</strong> {jogador.altura} m<br />
                            <strong>Peso:</strong> {jogador.peso} kg<br />
                            <strong>Posição:</strong> {jogador.posicao}<br />
                            <strong>Número da Camisa:</strong> {jogador.numeroCamisa}<br />
                            <button onClick={() => {/* Navegar para detalhes do jogador */}}>
                                Ver Detalhes
                            </button>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}

export default ListaDeJogadores;
