import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import logo from '../../assets/images/logo.png';
import useMensagem from '../../hooks/useMensagem';
import MensagemFeedback from '../MensagemFeedback';
import axios from 'axios';

function FormularioCadastroJogador() {
    const [nome, setNome] = useState('');
    const [sexo, setSexo] = useState('');
    const [idade, setIdade] = useState('');
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [posicao, setPosicao] = useState('');
    const [numeroCamisa, setNumeroCamisa] = useState('');

    const navigate = useNavigate();
    const { mostrarMensagem, mensagem, tipoMensagem, visivel, fecharMensagem } = useMensagem();

    const cadastroJogador = async (event) => {
        event.preventDefault(); // Previne o comportamento padrão do formulário
        try {
            const jogador = {
                nome,
                sexo,
                idade: Number(idade),
                altura: parseFloat(altura),
                peso: parseFloat(peso),
                posicao,
                numeroCamisa: Number(numeroCamisa)
            };
            const response = await axios.post('http://localhost:8080/api/jogadores', jogador);
            mostrarMensagem(response.data.mensagem || 'Jogador cadastrado com sucesso!', 'sucesso');
            setNome('');
            setSexo('');
            setIdade('');
            setAltura('');
            setPeso('');
            setPosicao('');
            setNumeroCamisa('');
            navigate('/jogadores'); // Navega para a lista de jogadores após o cadastro
        } catch (error) {
            let erroMsg = 'Erro ao conectar ao servidor. ';
            if (error.response && error.response.data) {
                erroMsg += error.response.data.mensagem || 'Erro ao cadastrar jogador.';
                if (error.response.data.erros) {
                    erroMsg += ' ' + error.response.data.erros.join(', ');
                }
            }
            mostrarMensagem(erroMsg, 'erro'); // Exibe a mensagem de erro
        }
    };

    return (
        <div className="container">
            <div className="formulario-cadastro">
                <img src={logo} alt="Logo" className="logo" />
                <h1>Cadastro de Jogador</h1>
                <form onSubmit={cadastroJogador}>
                    <input 
                        type="text" 
                        placeholder="Nome" 
                        value={nome} 
                        onChange={(e) => setNome(e.target.value)} 
                        required 
                    />
                    <select 
                        value={sexo} 
                        onChange={(e) => setSexo(e.target.value)} 
                        required
                    >
                        <option value="" disabled>Selecione o sexo</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                    </select>
                    <input 
                        type="number" 
                        placeholder="Idade" 
                        value={idade} 
                        onChange={(e) => setIdade(e.target.value)} 
                        min="10" max="100"
                        required 
                    />
                    <input 
                        type="number" 
                        step="0.01" 
                        placeholder="Altura (m)" 
                        value={altura} 
                        onChange={(e) => setAltura(e.target.value)} 
                        min="0.50" max="3.00"
                        required 
                    />
                    <input 
                        type="number" 
                        step="0.01" 
                        placeholder="Peso (kg)" 
                        value={peso} 
                        onChange={(e) => setPeso(e.target.value)} 
                        min="20" max="300"
                        required 
                    />
                    <input 
                        type="text" 
                        placeholder="Posição" 
                        value={posicao} 
                        onChange={(e) => setPosicao(e.target.value)} 
                        required 
                    />
                    <input 
                        type="number" 
                        placeholder="Número da Camisa" 
                        value={numeroCamisa} 
                        onChange={(e) => setNumeroCamisa(e.target.value)} 
                        min="0" max="99"
                        required 
                    />
                    <button type="submit">Cadastrar</button>
                </form>
                <button onClick={() => navigate('/jogadores')} className="link-jogadores">
                    Ver jogadores cadastrados
                </button>

                <MensagemFeedback
                    mensagem={mensagem}
                    tipoMensagem={tipoMensagem}
                    visivel={visivel}
                    fecharMensagem={fecharMensagem}
                />
            </div>
        </div>
    );
}

export default FormularioCadastroJogador;

